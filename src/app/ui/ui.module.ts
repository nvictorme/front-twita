import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {
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
import { FabTwitaComponent } from './fab-twita/fab-twita.component';
import { FabReplyComponent } from './fab-reply/fab-reply.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FavbarComponent,
    MenubarComponent,
    FooterComponent,
    FabTwitaComponent,
    FabReplyComponent
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
    NbContextMenuModule
  ],
  exports: [
    HeaderComponent,
    FavbarComponent,
    MenubarComponent,
    FooterComponent,
    FabTwitaComponent,
    FabReplyComponent
  ]
})
export class UiModule {
}
