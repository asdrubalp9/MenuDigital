import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusComponent } from './menus.component';
import { MenusRoutingModule } from './menus-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    MenusRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    MenusComponent
  ]
})
export class MenusModule { }
