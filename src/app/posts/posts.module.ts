import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import {NbActionsModule, NbButtonModule, NbCardModule, NbIconModule, NbListModule, NbSpinnerModule, NbUserModule} from '@nebular/theme';
import {UiModule} from '../ui/ui.module';



@NgModule({
  declarations: [PostListComponent, PostItemComponent],
  exports: [
    PostItemComponent
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
    UiModule
  ]
})
export class PostsModule { }
