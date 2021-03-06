import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {
    NbActionsModule,
    NbButtonModule,
    NbCardModule, NbContextMenuModule, NbIconModule,
    NbInputModule,
    NbLayoutModule,
    NbListModule,
    NbMenuModule, NbPopoverModule,
    NbSidebarModule,
    NbToggleModule, NbUserModule
} from '@nebular/theme';
import {RouterModule} from '@angular/router';
import {FavbarComponent} from './favbar/favbar.component';
import {MenubarComponent} from './menubar/menubar.component';
import {FooterComponent} from './footer/footer.component';
import {FabTwitaComponent} from './fab-twita/fab-twita.component';
import {FabReplyComponent} from './fab-reply/fab-reply.component';
import {FavListItemComponent} from './favbar/fav-list-item/fav-list-item.component';
import {UserProfileHeaderComponent} from './user-profile/user-profile-header/user-profile-header.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserMetaComponent} from './user-profile/user-meta/user-meta.component';
import {GaugeChartModule} from 'angular-gauge-chart';
import { UserPerformanceGaugeComponent } from './user-profile/user-performance-gauge/user-performance-gauge.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FavbarComponent,
    MenubarComponent,
    FooterComponent,
    FabTwitaComponent,
    FabReplyComponent,
    FavListItemComponent,
    UserProfileHeaderComponent,
    UserProfileComponent,
    UserMetaComponent,
    UserPerformanceGaugeComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbToggleModule,
    RouterModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbListModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbUserModule,
    NbContextMenuModule,
    NbActionsModule,
    NbPopoverModule,
    GaugeChartModule
  ],
  exports: [
    HeaderComponent,
    FavbarComponent,
    MenubarComponent,
    FooterComponent,
    FabTwitaComponent,
    FabReplyComponent,
    UserProfileComponent
  ]
})
export class UiModule {
}
