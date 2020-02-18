import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {User} from 'firebase';
import {AuthService} from '../../../services/auth.service';
import {DbService} from '../../../services/db.service';
import {NbDialogService, NbGlobalPhysicalPosition, NbToastrService} from '@nebular/theme';
import {Post} from '../../../models/interfaces';
import {initPostMedia, initPostMeta, parseTags} from '../../../helpers';
import {PostTypes} from '../../../models/enumerations';

@Component({
  selector: 'app-post-code-form',
  templateUrl: './post-code-form.component.html',
  styleUrls: ['./post-code-form.component.scss']
})
export class PostCodeFormComponent implements OnInit {

  codeForm: FormGroup;
  user: Observable<User | null>;

  constructor(private auth: AuthService,
              private dbs: DbService,
              private toasty: NbToastrService,
              private dialogService: NbDialogService) {
  }

  ngOnInit(): void {
    this.initTextForm();
    this.user = this.auth.getUser();
  }

  initTextForm() {
    this.codeForm = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(150)]
      }),
      description: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(3000)]
      }),
      code: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(5000)]
      }),
      tags: new FormControl([])
    });
  }

  onSubmit() {
    if (this.codeForm.invalid) {
      return;
    }
    try {
      const {title, description, code, tags} = this.codeForm.getRawValue();
      this.user.subscribe(userData => {
        const newPost: Post = {
          authorId: userData.uid,
          createdAt: new Date(),
          description,
          media: {...initPostMedia(), code},
          meta: initPostMeta(),
          tags: parseTags(tags),
          title,
          type: PostTypes.Code
        };
        this.dbs.updateAt('posts', newPost)
          .then(updateResult => {
            this.toasty.show('Post created successfully!', undefined, {
              duration: 2000,
              position: NbGlobalPhysicalPosition.TOP_RIGHT,
              status: 'success'
            });
          })
          .catch(error => {
            this.toasty.show(error.message, 'Oops! Try again later', {
              duration: 4000,
              position: NbGlobalPhysicalPosition.TOP_RIGHT,
              status: 'danger'
            });
          })
          .finally(() => this.initTextForm());
      });
    } catch (e) {
      console.error(e.message);
    }
  }

}
