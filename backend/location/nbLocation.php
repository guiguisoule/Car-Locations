<?php

    // appele de la connecion a la base de donnee
    require '../db_connexion.php';

    $status = ($_GET['id'] !== '') ? mysqli_real_escape_string($conn, $_GET['status']) : false;

    if(!$id){
        $sql = "SELECT COUNT(*) FROM location";
    }else{
        $sql = "SELECT COUNT(*) FROM location WHERE status = $status";
    }
    

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
