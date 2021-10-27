<?php

    // appele de la connecion a la base de donnee
    require '../db_connexion.php';

    $id = ($_GET['id'] !== null && (int)$_GET['id'] > 0) ? mysqli_real_escape_string($conn, $_GET['id']) : false;


    if(!$id){
        
        return http_response_code(400);

    }

    $sql = "SELECT * FROM location WHERE id = $id";

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
