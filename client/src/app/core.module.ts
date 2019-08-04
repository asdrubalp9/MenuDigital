import { NgModule } from '@angular/core';
/* START MY SERVICES IMPORTS*/
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { EmpresasService } from './services/empresas.service';
import { UserService } from './services/user.service';
import { CategoriaMenuService } from './services/categoria-menu.service';
import { ConfigService } from './services/config.service';
import { ItemMenuService } from './services/item-menu.service';
import { ItemOrdenService } from './services/item-orden.service';
import { MediaService } from './services/media.service';
import { MenuService } from './services/menu.service';
import { MesasService } from './services/mesas.service';
import { OrdenesService } from './services/ordenes.service';
import { TiposMediaService } from './services/tipos-media.service';
import { UserEmpresaService } from './services/user-empresa.service';

/* END MY SERVICES IMPORTS*/
import { AuthGuard } from './security/auth.guard';
import { AuthenticationService } from './security/authentication.service';
import { SecurityService } from './security/services/security.service';
import { HTTP_INTERCEPTORS } from '../../node_modules/@angular/common/http';
import { AuthInterceptor } from './security/auth.interceptor';

@NgModule({
  imports: [],
  providers: [
    /* START PROVIDERS */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
    EmpresasService,
    UserService,
    CategoriaMenuService,
    ConfigService,
    ItemMenuService,
    ItemOrdenService,
    MediaService,
    MenuService,
    MesasService,
    OrdenesService,
    TiposMediaService,
    UserEmpresaService,
 /* END PROVIDERS */

    // SECURITY
    AuthGuard,
    AuthenticationService,
    SecurityService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  exports: []
})
export class CoreModule {
}
