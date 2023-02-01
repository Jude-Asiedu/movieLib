import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './mainpage/page404/page404.component';


const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./mainpage/mainpage.module').then(m => m.MainpageModule)
  },
  {
    path: '**',
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
