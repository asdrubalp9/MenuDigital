import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresarComponent } from './ingresar.component';
import { IngresarRoutingModule } from './ingresar-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    IngresarRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    IngresarComponent
  ]
})
export class IngresarModule { }
