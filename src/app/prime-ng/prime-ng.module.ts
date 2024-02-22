import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
// import { MenuModule } from 'primeng/menu';
import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ButtonModule,
    // MenuModule,
    MenubarModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ToolbarModule,
    InputTextModule,
    AvatarGroupModule,
    AvatarModule,
    TableModule
  ]
})
export class PrimeNgModule { }
