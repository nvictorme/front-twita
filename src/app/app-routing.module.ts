import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DemoCodeComponent} from './demo-code/demo-code.component';
import {DemoListComponent} from './demo-list/demo-list.component';
import {DemoHomeComponent} from './demo-home/demo-home.component';

import {AngularFireAuthGuard, hasCustomClaim, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectLoggedInToFeed = () => redirectLoggedInTo(['demo-list']);
const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  {
    path: '',
    component: DemoHomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectLoggedInToFeed}
  },
  {
    path: 'demo-list',
    component: DemoListComponent,
    canActivate: [AngularFireAuthGuard],
    data: {authGuardPipe: redirectUnauthorizedToHome}
  },
  {
    path: 'demo-code',
    component: DemoCodeComponent,
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
