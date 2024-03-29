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
 *  FOR CUSTOMIZE empresasBaseService PLEASE EDIT ../empresas.service.ts
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
import { Empresas } from '../../domain/prueba-ska_db/empresas';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Empresas.service.ts
 */

/*
 * SCHEMA DB Empresas
 *
	{
		direccion: {
			type: 'String'
		},
		fechaAlta: {
			type: 'Date'
		},
		flag: {
			type: 'Boolean'
		},
		lastUpdate: {
			type: 'Date'
		},
		nombre: {
			type: 'String',
			required : true
		},
		rut: {
			type: 'String'
		},
		telefono: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		idEmpresa: {
			type: Schema.ObjectId,
			ref : "userEmpresa"
		},
		idEmpresa: {
			type: Schema.ObjectId,
			ref : "config"
		},
		idEmpresa: {
			type: Schema.ObjectId,
			ref : "menu"
		},
		idEmpresa: {
			type: Schema.ObjectId,
			ref : "mesas"
		},
	}
 *
 */
@Injectable()
export class EmpresasBaseService {

    contextUrl: string = environment.endpoint + '/empresas';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS


    // Custom APIs

}
