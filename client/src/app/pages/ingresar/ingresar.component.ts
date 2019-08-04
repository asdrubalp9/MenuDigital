// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

// START - USED SERVICES

// END - USED SERVICES

/**
 * ingresar Component
 */
@Component({
    selector: 'app-ingresar',
    templateUrl : './ingresar.component.html',
    styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent {

    constructor(
        private location: Location
        ) {

    }
}
