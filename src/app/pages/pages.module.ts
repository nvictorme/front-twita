import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {
  NbAccordionModule,
  NbActionsModule, NbAlertModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbLayoutModule,
  NbListModule,
  NbSpinnerModule
} from '@nebular/theme';
import {UiModule} from '../ui/ui.module';
import {LoginComponent} from './login/login.component';
import {RecentComponent} from './recent/recent.component';
import {PostsModule} from '../posts/posts.module';
import {SinglePostComponent} from './single-post/single-post.component';
import {RouterModule} from '@angular/router';
import {UserProfilePageComponent} from './user-profile-page/user-profile-page.component';
import {TagPageComponent} from './tag-page/tag-page.component';


@NgModule({
  declarations: [
    MyProfileComponent,
    LoginComponent,
    RecentComponent,
    SinglePostComponent,
    UserProfilePageComponent,
    TagPageComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    NbListModule,
    NbSpinnerModule,
    NbButtonModule,
    UiModule,
    NbIconModule,
    PostsModule,
    NbActionsModule,
    NbAccordionModule,
    RouterModule,
    NbAlertModule,
  ],
  exports: [
    MyProfileComponent,
    LoginComponent
  ]
})
export class PagesModule {
}
