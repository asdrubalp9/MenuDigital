/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE categoria-menuBaseService PLEASE EDIT ../categoria-menu.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { CategoriaMenu } from '../../domain/prueba-ska_db/categoria-menu';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../categoriaMenu.service.ts
 */

/*
 * SCHEMA DB categoriaMenu
 *
	{
		descripcionCategoria: {
			type: 'String'
		},
		nombreCategoria: {
			type: 'String',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		idMenu: {
			type: Schema.ObjectId,
			ref : "categoriaMenu"
		},
	}
 *
 */
@Injectable()
export class CategoriaMenuBaseService {

    contextUrl: string = environment.endpoint + '/categoriamenu';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS


    // Custom APIs

}
