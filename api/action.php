<?php
//dependency import
require 'properties.php';
require 'lib/Slim/Slim.php';
require 'security/Security.php';

//init Slim Framework
\Slim\Slim::registerAutoloader();
$app = new \Slim\Slim();
$app->add(new \Security($app));
require 'security/Login.php';
require 'security/ManageUser.php';

//resources
	//db pruebaSka_db
		require('./resource/pruebaSka_db/custom/EmpresasCustom.php');
		require('./resource/pruebaSka_db/Empresas.php');
		require('./resource/pruebaSka_db/custom/UserCustom.php');
		require('./resource/pruebaSka_db/User.php');
		require('./resource/pruebaSka_db/custom/categoriaMenuCustom.php');
		require('./resource/pruebaSka_db/categoriaMenu.php');
		require('./resource/pruebaSka_db/custom/configCustom.php');
		require('./resource/pruebaSka_db/config.php');
		require('./resource/pruebaSka_db/custom/itemMenuCustom.php');
		require('./resource/pruebaSka_db/itemMenu.php');
		require('./resource/pruebaSka_db/custom/itemOrdenCustom.php');
		require('./resource/pruebaSka_db/itemOrden.php');
		require('./resource/pruebaSka_db/custom/mediaCustom.php');
		require('./resource/pruebaSka_db/media.php');
		require('./resource/pruebaSka_db/custom/menuCustom.php');
		require('./resource/pruebaSka_db/menu.php');
		require('./resource/pruebaSka_db/custom/mesasCustom.php');
		require('./resource/pruebaSka_db/mesas.php');
		require('./resource/pruebaSka_db/custom/ordenesCustom.php');
		require('./resource/pruebaSka_db/ordenes.php');
		require('./resource/pruebaSka_db/custom/tiposMediaCustom.php');
		require('./resource/pruebaSka_db/tiposMedia.php');
		require('./resource/pruebaSka_db/custom/userEmpresaCustom.php');
		require('./resource/pruebaSka_db/userEmpresa.php');
	

$app->run();


?>
