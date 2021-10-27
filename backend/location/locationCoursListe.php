<?php

  // appele de la connecion a la base de donnee
  require '../db_connexion.php';

  $sql = "SELECT * FROM location WHERE status='En Cours'";

  $result = $conn->query($sql);
  $myArr = array();

  if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
      $myArr[] = $row;
    }

  }else{
    echo "0 results";
  }

  $myJSON= json_encode($myArr);
  echo $myJSON;


