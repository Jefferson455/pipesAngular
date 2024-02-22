import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { NumberPagesComponent } from './pages/number-pages/number-pages.component';
import { UcommonPagesComponent } from './pages/ucommon-pages/ucommon-pages.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: BasicPagesComponent
  },
  {
    path: 'number',
    component: NumberPagesComponent
  },
  {
    path: 'uncommon',
    component: UcommonPagesComponent
  },
  {
    path: 'custom',
    component: OrderComponent
  },
  {
    path: '**',
    redirectTo: ''
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
