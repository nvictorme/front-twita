import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {User} from 'firebase';
import {AuthService} from '../../../services/auth.service';
import {DbService} from '../../../services/db.service';
import {NbGlobalPhysicalPosition, NbToastrService} from '@nebular/theme';
import {Post} from '../../../models/interfaces';
import {initPostMedia, initPostMeta, parseTags} from '../../../helpers';
import {PostTypes} from '../../../models/enumerations';
import {Upload} from '../../../models/upload.class';
import {StorageService} from '../../../services/storage.service';

@Component({
  selector: 'app-post-image-form',
  templateUrl: './post-image-form.component.html',
  styleUrls: ['./post-image-form.component.scss']
})
export class PostImageFormComponent implements OnInit {

  textForm: FormGroup;
  user: Observable<User | null>;
  @Input() isComment = false;
  @Input() postId: string;

  upload: Upload;
  fileList: FileList;

  constructor(private auth: AuthService,
              private dbs: DbService,
              private stgs: StorageService,
              private toasty: NbToastrService) {
  }

  ngOnInit(): void {
    this.initTextForm();
    this.user = this.auth.getUser();
  }

  initTextForm() {
    this.upload = undefined;
    this.textForm = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(150)]
      }),
      description: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5), Validators.maxLength(3000)]
      }),
      image: new FormControl(null, {
        validators: [Validators.required]
      }),
      tags: new FormControl([])
    });
  }

  detectFiles(evt: any) {
    this.fileList = evt.target.files;
    this.upload = new Upload(this.fileList[0]);
    this.textForm.patchValue({image: this.upload.name});
  }

  uploadImage() {
    return new Promise((fulfill, reject) => {
      // start cover image upload task and subscribe to it
      this.stgs.uploadFile('/media', this.upload).subscribe(progress => {
        this.upload.progress = progress;
        // when the progress reaches 100% it means the upload is complete
        if (this.upload.progress === 100) {
          fulfill(true);
        }
      });
    });
  }

  roundProgress() {
    return Math.round(this.upload.progress ?? 0);
  }

  async onSubmit() {
    if (this.textForm.invalid) {
      return;
    }
    try {
      await this.uploadImage();
      const {title, description, tags} = this.textForm.getRawValue();
      this.user.subscribe(userData => {
        const newPost: Post = {
          authorId: userData.uid,
          createdAt: new Date(),
          description,
          media: {...initPostMedia, fileName: this.upload.name},
          meta: initPostMeta(),
          tags: parseTags(tags),
          title,
          type: PostTypes.Image
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
          .finally(() => this.initTextForm());
      });
    } catch (e) {
      console.error(e.message);
    }
  }

}
