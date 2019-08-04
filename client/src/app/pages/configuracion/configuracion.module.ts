import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracionComponent } from './configuracion.component';
import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ConfiguracionRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ConfiguracionComponent
  ]
})
export class ConfiguracionModule { }
