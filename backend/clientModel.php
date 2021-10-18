<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$conn = new mysqli('localhost','root','','db_location_vehicul');
if(isset($_POST['name']) ||!empty($_POST["prenom"]))
{
       // Ajouter un client
  $sql = "INSERT INTO client (cnib,name,prenom,sexe,datebirth,function,tel)
  VALUES ('".$_POST['cnib']."','".$_POST['name']."','".$_POST['prenom']."','".$_POST['sexe']."', '".$_POST['datebirth']."', '".$_POST['tel']."',".$_POST['function'].")";

  if ($conn->query($sql) === TRUE) {
    $myJSON = json_encode("New user created successfully");
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

else
{
// Get User
$sql = "SELECT * FROM client";
$result = $conn->query($sql);
$myArr = array();
if ($result->num_rows > 0) {
// output data of each row
while($row = $result->fetch_assoc()) {
$myArr[] = $row;
}
} else {
echo "0 results";
}

$myJSON= json_encode($myArr);
echo $myJSON;


}
