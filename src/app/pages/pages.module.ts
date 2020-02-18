import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {NbButtonModule, NbCardModule, NbIconModule, NbLayoutModule, NbListModule, NbSpinnerModule} from '@nebular/theme';
import {UiModule} from '../ui/ui.module';
import {LoginComponent} from './login/login.component';


@NgModule({
  declarations: [
    MyProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    NbListModule,
    NbSpinnerModule,
    NbButtonModule,
    UiModule,
    NbIconModule
  ],
  exports: [
    MyProfileComponent,
    LoginComponent
  ]
})
export class PagesModule {
}
