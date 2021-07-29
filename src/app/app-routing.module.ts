import { RouterModule, Routes } from '@angular/router';

import { DetailComponent } from './components/detail/detail.component';
import { IndexComponent } from './components/index/index.component';
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
