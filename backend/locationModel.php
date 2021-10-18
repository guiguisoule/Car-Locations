<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$conn = new mysqli('localhost','root','','db_location_vehicul');
if(isset($_POST['idUser']))

{
       // Ajouter un client
  $sql = "INSERT INTO location (id,idUser,idVehicule,idClient,dateLocation,dateRemise,nbJour,montantLocation,montantVerse,montantRestant,objet,modePayement)
  VALUES ('".$_POST['id']."','".$_POST['idUser']."','".$_POST['idVehicule']."','".$_POST['idClient']."', '".$_POST['dateLocation']."', '".$_POST['dateRemise']."', '".$_POST['montantLocation']."', '".$_POST['montantVerse']."', '".$_POST['montantRestant']."' , '".$_POST['objet']."' ,".$_POST['modePayement'].")";

  if ($conn->query($sql) === TRUE) {
    $myJSON = json_encode("New user created successfully");
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
}

else
{
// Get User
$sql = "SELECT * FROM location";
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
