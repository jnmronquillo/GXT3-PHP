<?php 

include('../config/connect.php');
include('../util/paginate.php');

if($_SERVER['REQUEST_METHOD'] =="POST"){
	$params = json_decode(file_get_contents('php://input'));
	
	$paginate = new Paginate();
	$paginate->params = $params;
	$paginate->init();
			
	$sql = "SELECT * FROM users where 1=1 ".$paginate->condition." ".$paginate->order." limit :limit offset :offset";
	$sql_count = "SELECT count(*) as count FROM users where 1=1 ".$paginate->condition;
	
	//echo $paginate->condition;
	
    $stmt_user = $conexion->prepare($sql);
    $stmt_user->execute(array('limit'=>$paginate->limit,'offset'=>$paginate->offset));
    $users = $stmt_user->fetchAll(PDO::FETCH_CLASS, "User");
	
	$stmt_count = $conexion->prepare($sql_count);
    $stmt_count->execute();
    
    $count = $stmt_count->fetch(PDO::FETCH_COLUMN);
	
	$data = new Data();
	$data->data = $users;
	$data->totalCount = (int)$count;
	
	$conexion = null;
	$stmt = null;
	$stmt_count = null;
	echo json_encode($data);

}else if($_SERVER['REQUEST_METHOD'] =="PUT"){

	if($_GET['action']=='save'){
	
		$user = json_decode(file_get_contents('php://input'));		
		
		if(!isset($user->id)){
			$sql = "insert into users(login,first,last) values(:login,:first,:last)";
			$stmt = $conexion->prepare($sql);
    		$stmt->execute(array('login'=>$user->login,'first'=>$user->first, 'last'=>$user->last));
		}else{
			$sql = "update users set login = :login, first = :first, last = :last where id = :id";
			$stmt = $conexion->prepare($sql);
    		$stmt->execute(array('login'=>$user->login,'first'=>$user->first, 'last'=>$user->last, 'id'=>$user->id));
		}
				
	}
	
	if($_GET['action']=='delete'){
	
		$data = json_decode(file_get_contents('php://input'));
		
		$conexion->beginTransaction();
		try{
			foreach($data->data as $user){
				$sql = "delete from users where id = :id";
				$stmt = $conexion->prepare($sql);
    			$stmt->execute(array('id'=>$user->id));
			}
			$conexion->commit();
		}catch(PDOException $e){
			$conexion->rollBack();
		}	
	}
	
	$conexion = null;
	$stmt = null;
}

class User{
	public $first;
	public $last;
	public $login;
}

class Data{
	public $data;
	public $totalCount;
}


?>