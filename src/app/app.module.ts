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
  NbSpinnerModule, NbUserModule, NbActionsModule, NbIconModule, NbButtonModule, NbAccordionModule, NbInputModule, NbToggleModule
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {HttpClientModule} from '@angular/common/http';
import {DemoCodeComponent} from './demo-code/demo-code.component';
import {DemoHomeComponent} from './demo-home/demo-home.component';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireAuthGuard, AngularFireAuthGuardModule} from '@angular/fire/auth-guard';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAnalyticsModule} from '@angular/fire/analytics';
import {AngularFirePerformanceModule} from '@angular/fire/performance';
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import {PlaceholderService} from './services/placeholder.service';
import {UiModule} from './ui/ui.module';
import {PagesModule} from './pages/pages.module';
import {PostsModule} from './posts/posts.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoCodeComponent,
    DemoHomeComponent
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
    UiModule,
    PagesModule,
    PostsModule
  ],
  providers: [
    AngularFireAuthGuard,
    PlaceholderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
