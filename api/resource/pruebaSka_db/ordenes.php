<?php
	require_once './db/dbpruebaSka_dbManager.php';
	
/*
 * SCHEMA DB ordenes
 * 
	{
		fechaAbierto: {
			type: 'Date', 
			required : true
		},
		fechaCerrado: {
			type: 'Date'
		},
		modoPago: {
			type: 'String'
		},
		status: {
			type: 'Integer'
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		idMesa: {
			type: Schema.ObjectId,
			ref : "ordenes"
		},
		idOrden: {
			type: Schema.ObjectId,
			ref : "itemOrden"
		},
		idRestaurant: {
			type: Schema.ObjectId,
			ref : "ordenes"
		},
		idUsuario: {
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