<?php
header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
include_once "./connection.php";
$sql= "SELECT * from activity where act_type= 'planting'";

$r=mysqli_query($conn,$sql);
$json_data = array();
while($row=mysqli_fetch_assoc($r)){
    $json_data[] =$row;
}
echo json_encode(['spraylogData'=>$json_data]);
 // echo json_encode($arr =array('client'=>true,'consultant'=>false,'status'=>true));
 

  ?>