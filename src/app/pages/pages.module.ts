import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbListModule, NbSpinnerModule} from '@nebular/theme';
import {UiModule} from '../ui/ui.module';
import {LoginComponent} from './login/login.component';
import { RecentComponent } from './recent/recent.component';
import {PostsModule} from '../posts/posts.module';


@NgModule({
  declarations: [
    MyProfileComponent,
    LoginComponent,
    RecentComponent
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
    PostsModule
  ],
  exports: [
    MyProfileComponent,
    LoginComponent
  ]
})
export class PagesModule {
}
