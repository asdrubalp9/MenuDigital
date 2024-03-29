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
 *  FOR CUSTOMIZE user-empresaBaseService PLEASE EDIT ../user-empresa.service.ts
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
import { UserEmpresa } from '../../domain/prueba-ska_db/user-empresa';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../userEmpresa.service.ts
 */

/*
 * SCHEMA DB userEmpresa
 *
	{
		lastUpdate: {
			type: 'Date',
			required : true
		},
		tipoUsuario: {
			type: 'Integer',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		idEmpresa: {
			type: Schema.ObjectId,
			ref : "userEmpresa"
		},
		idUsuario: [{
			type: Schema.ObjectId,
			ref : "userEmpresa"
		}],
	}
 *
 */
@Injectable()
export class UserEmpresaBaseService {

    contextUrl: string = environment.endpoint + '/userempresa';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS


    // Custom APIs

}
