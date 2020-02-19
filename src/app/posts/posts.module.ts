import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule, NbInputModule,
  NbListModule,
  NbSpinnerModule,
  NbTabsetModule,
  NbUserModule
} from '@nebular/theme';
import {UiModule} from '../ui/ui.module';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostTextFormComponent } from './create-post/post-text-form/post-text-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TagInputModule} from 'ngx-chips';
import {HighlightJsModule} from 'ngx-highlight-js';
import { PostCodeFormComponent } from './create-post/post-code-form/post-code-form.component';



@NgModule({
  declarations: [PostListComponent, PostItemComponent, CreatePostComponent, PostTextFormComponent, PostCodeFormComponent],
  exports: [
    PostItemComponent,
    PostListComponent,
    CreatePostComponent
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
    HighlightJsModule
  ]
})
export class PostsModule { }
