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
import {TagPageComponent} from './pages/tag-page/tag-page.component';

const redirectLoggedInToFeed = () => redirectLoggedInTo(['recent']);
const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const isAdmin = () => pipe(customClaims, map(claims => claims.roles.admin));
const isEditor = () => pipe(customClaims, map(claims => claims.roles.editor));

const routes: Routes = [
  {
    path: '',
    redirectTo: 'recent',
    pathMatch: 'prefix'
  },
  {
    path: 'recent',
    component: RecentComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToFeed}
  },
  {
    path: 'post/:postId',
    component: SinglePostComponent
  },
  {
    path: 'tag/:tag',
    component: TagPageComponent
  },
  {
    path: 'profile/:userId',
    component: UserProfilePageComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToLogin}
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
