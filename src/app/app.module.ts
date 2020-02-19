import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbListModule,
  NbCardModule,
  NbSpinnerModule,
  NbUserModule,
  NbActionsModule,
  NbIconModule,
  NbButtonModule,
  NbAccordionModule,
  NbInputModule,
  NbToggleModule,
  NbToastrService, NbToastrModule, NbWindowModule, NbWindowService, NbDialogModule, NbDialogService
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireAuthGuard, AngularFireAuthGuardModule} from '@angular/fire/auth-guard';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAnalyticsModule} from '@angular/fire/analytics';
import {AngularFirePerformanceModule} from '@angular/fire/performance';
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import {FavoriteService} from './services/favorite.service';
import {UiModule} from './ui/ui.module';
import {PagesModule} from './pages/pages.module';
import {PostsModule} from './posts/posts.module';
import {AuthService} from './services/auth.service';
import {DbService} from './services/db.service';
import {StorageService} from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAnalyticsModule,
    AngularFirePerformanceModule,
    AngularFireMessagingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbEvaIconsModule,
    NbLayoutModule,
    NbListModule,
    NbCardModule,
    NbSidebarModule.forRoot(),
    NbSpinnerModule,
    NbUserModule,
    NbActionsModule,
    NbIconModule,
    NbButtonModule,
    NbAccordionModule,
    NbToastrModule.forRoot(),
    NbWindowModule.forRoot(),
    NbDialogModule.forRoot(),
    UiModule,
    PagesModule,
    PostsModule
  ],
  providers: [
    AngularFireAuthGuard,
    NbToastrService,
    NbWindowService,
    NbDialogService,
    FavoriteService,
    AuthService,
    DbService,
    StorageService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
