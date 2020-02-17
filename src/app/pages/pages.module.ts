import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {NbCardModule, NbLayoutModule, NbListModule, NbSpinnerModule} from '@nebular/theme';
import {UiModule} from '../ui/ui.module';


@NgModule({
  declarations: [
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbCardModule,
    NbListModule,
    NbSpinnerModule,
    UiModule
  ],
  exports: [
    MyProfileComponent
  ]
})
export class PagesModule {
}
