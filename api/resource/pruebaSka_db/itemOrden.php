<?php
	require_once './db/dbpruebaSka_dbManager.php';
	
/*
 * SCHEMA DB itemOrden
 * 
	{
		cantidad: {
			type: 'String'
		},
		costo: {
			type: 'String'
		},
		fechaHora: {
			type: 'Date'
		},
		status: {
			type: 'Integer'
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		idItemMenu: {
			type: Schema.ObjectId,
			ref : "itemOrden"
		},
		idOrden: {
			type: Schema.ObjectId,
			ref : "itemOrden"
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