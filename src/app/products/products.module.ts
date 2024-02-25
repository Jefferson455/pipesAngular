import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicPagesComponent } from './pages/basic-pages/basic-pages.component';
import { NumberPagesComponent } from './pages/number-pages/number-pages.component';
import { UcommonPagesComponent } from './pages/ucommon-pages/ucommon-pages.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToogleCasePipe } from './pipes/toogle-case.pipe';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ColorNamePipe } from './pipes/color-name.pipe';


@NgModule({
  declarations: [
    BasicPagesComponent,
    NumberPagesComponent,
    UcommonPagesComponent,
    OrderComponent,
    //Pipes
    ToogleCasePipe,
    CanFlyPipe,
    SortByPipe,
    ColorNamePipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
