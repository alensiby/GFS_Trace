<?php
header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
include_once "./connection.php";
$data = json_decode(file_get_contents('php://input'), true); 
$sql ="INSERT INTO user (user_email,user_first_name,user_last_name,user_password,user_lang,user_type) VALUES
 ('".$data['user_email']."','".$data['user_first_name']."','".$data['user_last_name']."','".$data['user_password']."','".$data['user_lang']."','".$data['user_type']."');";

if (mysqli_query($conn,$sql)){

    if($data['user_type']=="Client"){
  echo json_encode($arr =array('client'=>true,'consultant'=>false,'status'=>true));
  
}
else
echo json_encode($arr=array('client'=>false,'consultant'=>true,'status'=>true));

  }else {
    echo 'error'.mysqli_error($conn);
    
  }

  ?>