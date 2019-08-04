<?php
	require_once './db/dbpruebaSka_dbManager.php';
	
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
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
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


//CRUD METHODS



/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */

			
?>