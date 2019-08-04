<?php
	require_once './db/dbpruebaSka_dbManager.php';
	
/*
 * SCHEMA DB mesas
 * 
	{
		flag: {
			type: 'Boolean'
		},
		hash: {
			type: 'String'
		},
		lastUpdate: {
			type: 'Date'
		},
		nombre: {
			type: 'String'
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		idEmpresa: {
			type: Schema.ObjectId,
			ref : "mesas"
		},
		idMesa: {
			type: Schema.ObjectId,
			ref : "ordenes"
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