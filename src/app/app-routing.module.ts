import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './detail/detail.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'details/:language',
    component: DetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
