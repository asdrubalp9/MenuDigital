<?php
	require_once './db/dbpruebaSka_dbManager.php';
	
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
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
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


//CRUD METHODS



/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>