import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DemoCodeComponent} from './demo-code/demo-code.component';
import {DemoListComponent} from './demo-list/demo-list.component';
import {DemoHomeComponent} from './demo-home/demo-home.component';


const routes: Routes = [
  {
    path: '',
    component: DemoHomeComponent
  },
  {
    path: 'demo-list',
    component: DemoListComponent
  },
  {
    path: 'demo-code',
    component: DemoCodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
