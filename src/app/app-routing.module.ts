import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo, customClaims} from '@angular/fire/auth-guard';
import {MyProfileComponent} from './pages/my-profile/my-profile.component';
import {pipe} from 'rxjs';
import {map} from 'rxjs/operators';
import {LoginComponent} from './pages/login/login.component';
import {RecentComponent} from './pages/recent/recent.component';
import {SinglePostComponent} from './pages/single-post/single-post.component';
import {UserProfilePageComponent} from './pages/user-profile-page/user-profile-page.component';

const redirectLoggedInToFeed = () => redirectLoggedInTo(['recent']);
const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['']);
const isAdmin = () => pipe(customClaims, map(claims => claims.roles.admin));
const isEditor = () => pipe(customClaims, map(claims => claims.roles.editor));

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToFeed}
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToFeed}
  },
  {
    path: 'recent',
    component: RecentComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToHome}
  },
  {
    path: 'post/:postId',
    component: SinglePostComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToHome}
  },
  {
    path: 'profile/:userId',
    component: UserProfilePageComponent,
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
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
