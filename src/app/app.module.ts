import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbInfiniteListDirective,
  NbListModule,
  NbCardModule,
  NbSpinnerModule, NbUserModule, NbActionsModule, NbIconModule, NbButtonModule, NbAccordionModule, NbInputModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {HttpClientModule} from '@angular/common/http';
import { DemoItemComponent } from './demo-item/demo-item.component';
import { DemoCodeComponent } from './demo-code/demo-code.component';
import { DemoListComponent } from './demo-list/demo-list.component';
import { DemoHomeComponent } from './demo-home/demo-home.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoItemComponent,
    DemoCodeComponent,
    DemoListComponent,
    DemoHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbListModule,
    NbCardModule,
    NbSpinnerModule,
    NbUserModule,
    NbActionsModule,
    NbIconModule,
    NbButtonModule,
    NbAccordionModule,
    NbInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
