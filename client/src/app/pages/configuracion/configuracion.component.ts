// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

// START - USED SERVICES

// END - USED SERVICES

/**
 * Configuracion Component
 */
@Component({
    selector: 'app-configuracion',
    templateUrl : './configuracion.component.html',
    styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent {

    constructor(
        private location: Location
        ) {

    }
}
