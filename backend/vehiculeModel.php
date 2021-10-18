<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$conn = new mysqli('localhost','root','','db_location_vehicul');
if(isset($_POST['matricule']))
{
       // Ajouter un client
  $sql = "INSERT INTO vehicule (matricule,type,marque,serie,couleur,place,montantLocation,dateCre,dateMaj,status,etat,image)
  VALUES ('".$_POST['matricule']."','".$_POST['type']."','".$_POST['marque']."','".$_POST['serie']."', '".$_POST['couleur']."','".$_POST['place']."','".$_POST['montantLocation']."','".$_POST['dateCre']."','".$_POST['dateMaj']."','".$_POST['status']."','".$_POST['etat']."',".$_POST['image'].")";

  if ($conn->query($sql) === TRUE) {
    $myJSON = json_encode("New user created successfully");
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

else
{
// Get User
$sql = "SELECT * FROM vehicule";
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
