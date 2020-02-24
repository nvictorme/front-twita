import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {User} from 'firebase';
import {AuthService} from '../../../services/auth.service';
import {DbService} from '../../../services/db.service';
import {NbDialogRef, NbGlobalPhysicalPosition, NbToastrService} from '@nebular/theme';
import {Post} from '../../../models/interfaces';
import {initPostMedia, initPostMeta, parseTags} from '../../../helpers';
import {PostTypes} from '../../../models/enumerations';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-post-video-form',
  templateUrl: './post-video-form.component.html',
  styleUrls: ['./post-video-form.component.scss']
})
export class PostVideoFormComponent implements OnInit {

  textForm: FormGroup;
  user: Observable<User | null>;
  @Input() isComment = false;
  @Input() postId: string;

  constructor(private auth: AuthService,
              private dbs: DbService,
              private toasty: NbToastrService,
              private dialogRef: NbDialogRef<any>) {
  }

  ngOnInit(): void {
    this.initTextForm();
    this.user = this.auth.getUser();
  }

  initTextForm() {
    this.textForm = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(150)]
      }),
      description: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(3000)]
      }),
      url: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.minLength(30),
          Validators.maxLength(150),
          Validators.pattern(environment.youtubeUrlPattern)
        ]
      }),
      tags: new FormControl([])
    });
  }

  onSubmit() {
    if (this.textForm.invalid) {
      return;
    }
    try {
      const {title, description, url, tags} = this.textForm.getRawValue();
      this.user.subscribe(userData => {
        const newPost: Post = {
          authorId: userData.uid,
          createdAt: new Date(),
          description,
          media: {...initPostMedia(), url},
          meta: initPostMeta(),
          tags: parseTags(tags),
          title,
          type: PostTypes.Video
        };
        this.dbs.updateAt(this.isComment ? `posts/${this.postId}/comments` : 'posts', newPost)
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
          .finally(() => this.dialogRef.close());
      });
    } catch (e) {
      console.error(e.message);
    }
  }

}
