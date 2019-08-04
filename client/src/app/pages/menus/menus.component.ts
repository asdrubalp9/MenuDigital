// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

// START - USED SERVICES

// END - USED SERVICES

/**
 * Menus Component
 */
@Component({
    selector: 'app-menus',
    templateUrl : './menus.component.html',
    styleUrls: ['./menus.component.css']
})
export class MenusComponent {

    constructor(
        private location: Location
        ) {

    }
}
