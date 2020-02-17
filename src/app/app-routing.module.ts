import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DemoCodeComponent} from './demo-code/demo-code.component';
import {DemoHomeComponent} from './demo-home/demo-home.component';

import {AngularFireAuthGuard, hasCustomClaim, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import {MyProfileComponent} from './pages/my-profile/my-profile.component';
import {PostListComponent} from './posts/post-list/post-list.component';

const redirectLoggedInToFeed = () => redirectLoggedInTo(['recent']);
const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  {
    path: '',
    component: DemoHomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToFeed}
  },
  {
    path: 'recent',
    component: PostListComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToHome}
  },
  {
    path: 'demo-code',
    component: DemoCodeComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToHome}
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToHome}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
