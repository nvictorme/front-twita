import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';
import {User} from 'firebase';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {PostDeletePromptComponent} from './post-delete-prompt/post-delete-prompt.component';
import {AngularFireFunctions} from '@angular/fire/functions';
import {PostFlagPromptComponent} from './post-flag-prompt/post-flag-prompt.component';
import {FlagReport} from '../../models/interfaces';
import {FlagStatus} from '../../models/enumerations';

@Component({
  selector: 'app-post-flag-delete',
  templateUrl: './post-flag-delete.component.html',
  styleUrls: ['./post-flag-delete.component.scss']
})
export class PostFlagDeleteComponent implements OnInit {

  @Input() authorId: string;
  @Input() postId: string;
  @Input() isComment: boolean;
  @Input() parentId: string;
  user: Observable<User | null>;

  constructor(private auth: AuthService,
              private aff: AngularFireFunctions,
              private dialogService: NbDialogService,
              private notify: NbToastrService) {
  }

  ngOnInit(): void {
    this.user = this.auth.getUser();
  }

  onDeleteClick() {
    this.dialogService.open(PostDeletePromptComponent)
      .onClose.subscribe(del => {
      if (del === 'yes') {
        let postPath = `posts/${this.postId}`;
        if (this.isComment) {
          postPath = `posts/${this.parentId}/comments/${this.postId}`;
        }
        const deleteCall = this.aff.functions.httpsCallable('deletePost');
        deleteCall({
          postPath,
          authorId: this.authorId
        })
          .then(callableResult => {
            if (callableResult.data.success) {
              this.notify.success('Your post have been deleted', 'Post Deleted');
            } else if (callableResult.data.error) {
              this.notify.danger(callableResult.data.message, `Couldn't delete post`);
            } else {
              this.notify.warning(callableResult.data.message, `Couldn't delete post`);
            }
          })
          .catch(error => this.notify.danger(error.message, `Couldn't delete post`));
      }
    });
  }

  onFlagClick() {
    this.dialogService.open(PostFlagPromptComponent)
      .onClose.subscribe((flagReport: FlagReport) => {
      if (flagReport) {
        flagReport.authorId = this.authorId;
        flagReport.postId = this.postId;
        flagReport.isComment = this.isComment ?? false;
        if (this.isComment) {
          flagReport.parentId = this.parentId;
        }
        flagReport.status = FlagStatus.open;
        const flagCall = this.aff.functions.httpsCallable('flagPost');
        flagCall(flagReport)
          .then(callableResult => {
            if (callableResult.data.success) {
              this.notify.success('Your report has been submitted', 'Flag Report');
            } else if (callableResult.data.error) {
              this.notify.danger(callableResult.data.message, `Couldn't process your report`);
            } else {
              this.notify.warning(callableResult.data.message, `Couldn't process your report`);
            }
          })
          .catch(error => this.notify.danger(error.message, `Couldn't process your report`));
      }
    });
  }

}
