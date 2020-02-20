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
  NbMenuModule,
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
    UserMetaComponent
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
    NbActionsModule
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
