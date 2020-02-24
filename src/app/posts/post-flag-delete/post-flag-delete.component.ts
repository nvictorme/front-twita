import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';
import {User} from 'firebase';
import {NbDialogService, NbToast, NbToastrService} from '@nebular/theme';
import {PostDeletePromptComponent} from './post-delete-prompt/post-delete-prompt.component';
import {DbService} from '../../services/db.service';

@Component({
  selector: 'app-post-flag-delete',
  templateUrl: './post-flag-delete.component.html',
  styleUrls: ['./post-flag-delete.component.scss']
})
export class PostFlagDeleteComponent implements OnInit {

  @Input() authorId: string;
  @Input() postId: string;
  user: Observable<User | null>;

  constructor(private auth: AuthService,
              private dialogService: NbDialogService,
              private notify: NbToastrService,
              private dbs: DbService) {
  }

  ngOnInit(): void {
    this.user = this.auth.getUser();
  }

  onDeleteClick() {
    this.dialogService.open(PostDeletePromptComponent)
      .onClose.subscribe(del => {
      if (del === 'yes') {
        this.dbs.deleteAt(`posts/${this.postId}`)
          .then(() => this.notify.success('Yous post have been deleted', 'Post Deleted'))
          .catch(error => this.notify.danger(error.message, `Couldn't delete post`));
      }
    });
  }

}
