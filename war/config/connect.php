<?php

  try{
    $conexion = new PDO('pgsql:host=localhost;dbname=crudphp', 'postgres', 'admin');
  }catch(PDOException $e){
    die("no se pudo conectar ".$e->message());
  }
        
?>