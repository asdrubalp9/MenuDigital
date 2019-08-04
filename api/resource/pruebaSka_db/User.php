<?php
	require_once './db/dbpruebaSka_dbManager.php';
	
/*
 * SCHEMA DB User
 * 
	{
		email: {
			type: 'String'
		},
		fechaAlta: {
			type: 'Date'
		},
		flag: {
			type: 'String'
		},
		hash: {
			type: 'String'
		},
		lastLog: {
			type: 'Date'
		},
		level: {
			type: 'Integer'
		},
		nombres: {
			type: 'String'
		},
		password: {
			type: 'String', 
			required : true
		},
		recibeOfertas: {
			type: 'Boolean'
		},
		telefono: {
			type: 'String'
		},
		username: {
			type: 'String', 
			required : true
		},
		//RELAZIONI
		
		
		//RELAZIONI ESTERNE
		
		idUsuario: {
			type: Schema.ObjectId,
			ref : "ordenes"
		},
		idUsuario: [{
			type: Schema.ObjectId,
			ref : "userEmpresa"
		}],
		
	}
 * 
 */


//CRUD METHODS


//CRUD - CREATE


$app->post('/user',	function () use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'email'	=> isset($body->email)?$body->email:'',
		'fechaAlta'	=> isset($body->fechaAlta)?$body->fechaAlta:'',
		'flag'	=> isset($body->flag)?$body->flag:'',
		'hash'	=> isset($body->hash)?$body->hash:'',
		'lastLog'	=> isset($body->lastLog)?$body->lastLog:'',
		'level'	=> isset($body->level)?$body->level:'',
		'nombres'	=> isset($body->nombres)?$body->nombres:'',
		'password'	=> $body->password,
		'recibeOfertas'	=> isset($body->recibeOfertas)?$body->recibeOfertas:'',
		'telefono'	=> isset($body->telefono)?$body->telefono:'',
		'username'	=> $body->username,
		

	);

	$obj = makeQuery("INSERT INTO user (_id, email, fechaAlta, flag, hash, lastLog, level, nombres, password, recibeOfertas, telefono, username )  VALUES ( null, :email, :fechaAlta, :flag, :hash, :lastLog, :level, :nombres, :password, :recibeOfertas, :telefono, :username   )", $params, false);
        
	
	echo json_encode($body);
	
});
	
//CRUD - REMOVE

$app->delete('/user/:id',	function ($id) use ($app){
	
	$params = array (
		'id'	=> $id,
	);

	makeQuery("DELETE FROM user WHERE _id = :id LIMIT 1", $params);

});
	
//CRUD - GET ONE
	
$app->get('/user/:id',	function ($id) use ($app){
	$params = array (
		'id'	=> $id,
	);
	
	$obj = makeQuery("SELECT * FROM user WHERE _id = :id LIMIT 1", $params, false);
	
	
	
	echo json_encode($obj);
	
});
	
	
//CRUD - GET LIST

$app->get('/user',	function () use ($app){
	makeQuery("SELECT * FROM user");
});


//CRUD - EDIT

$app->post('/user/:id',	function ($id) use ($app){

	$body = json_decode($app->request()->getBody());
	
	$params = array (
		'id'	=> $id,
		'email'	    => isset($body->email)?$body->email:'',
		'fechaAlta'	    => isset($body->fechaAlta)?$body->fechaAlta:'',
		'flag'	    => isset($body->flag)?$body->flag:'',
		'hash'	    => isset($body->hash)?$body->hash:'',
		'lastLog'	    => isset($body->lastLog)?$body->lastLog:'',
		'level'	    => isset($body->level)?$body->level:'',
		'nombres'	    => isset($body->nombres)?$body->nombres:'',
		'password'	    => $body->password,
		'recibeOfertas'	    => isset($body->recibeOfertas)?$body->recibeOfertas:'',
		'telefono'	    => isset($body->telefono)?$body->telefono:'',
		'username'	    => $body->username

	);

	$obj = makeQuery("UPDATE user SET  email = :email,  fechaAlta = :fechaAlta,  flag = :flag,  hash = :hash,  lastLog = :lastLog,  level = :level,  nombres = :nombres,  password = :password,  recibeOfertas = :recibeOfertas,  telefono = :telefono,  username = :username   WHERE _id = :id LIMIT 1", $params, false);
        
	
	echo json_encode($body);
    	
});


/*
 * CUSTOM SERVICES
 *
 *	These services will be overwritten and implemented in  Custom.js
 */


/*
 Name: changePassword
 Description: Change password of user from admin
 Params: 
 */
$app->post('/user/:id/changePassword',	function ($key) use ($app){	
	makeQuery("SELECT 'ok' FROM DUAL");
});
	
			
?>