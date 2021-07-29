import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './components/detail/detail.component';
import { IndexComponent } from './components/index/index.component';
import { NgModule } from '@angular/core';
import { NotFound404Component } from './components/not-found404/not-found404.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'details/:language',
    component: DetailComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFound404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
