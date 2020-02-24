import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostListComponent} from './post-list/post-list.component';
import {PostItemComponent} from './post-item/post-item.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule, NbInputModule,
  NbListModule, NbProgressBarModule,
  NbSpinnerModule,
  NbTabsetModule,
  NbUserModule
} from '@nebular/theme';
import {UiModule} from '../ui/ui.module';
import {CreatePostComponent} from './create-post/create-post.component';
import {PostTextFormComponent} from './create-post/post-text-form/post-text-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TagInputModule} from 'ngx-chips';
import {HighlightJsModule} from 'ngx-highlight-js';
import {PostCodeFormComponent} from './create-post/post-code-form/post-code-form.component';
import {PostVideoFormComponent} from './create-post/post-video-form/post-video-form.component';
import {EmbedVideoService} from '../services/embed-video.service';
import {PostImageFormComponent} from './create-post/post-image-form/post-image-form.component';
import {PostActionsComponent} from './post-actions/post-actions.component';
import {RouterModule} from '@angular/router';
import {UserRecentPostsComponent} from './user-recent-posts/user-recent-posts.component';
import { PostFlagDeleteComponent } from './post-flag-delete/post-flag-delete.component';
import { PostDeletePromptComponent } from './post-flag-delete/post-delete-prompt/post-delete-prompt.component';


@NgModule({
  declarations: [
    PostListComponent,
    PostItemComponent,
    CreatePostComponent,
    PostTextFormComponent,
    PostCodeFormComponent,
    PostVideoFormComponent,
    PostImageFormComponent,
    PostActionsComponent,
    UserRecentPostsComponent,
    PostFlagDeleteComponent,
    PostDeletePromptComponent
  ],
  exports: [
    PostItemComponent,
    PostListComponent,
    CreatePostComponent,
    UserRecentPostsComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbSpinnerModule,
    NbListModule,
    NbActionsModule,
    NbIconModule,
    NbUserModule,
    NbButtonModule,
    UiModule,
    NbTabsetModule,
    NbInputModule,
    ReactiveFormsModule,
    TagInputModule,
    HighlightJsModule,
    NbProgressBarModule,
    RouterModule
  ],
  providers: [
    EmbedVideoService
  ]
})
export class PostsModule {
}
