<?php

    // appele de la connecion a la base de donnee
    require '../db_connexion.php';

    $cnib = ($_GET['cnib'] !== null) ? mysqli_real_escape_string($conn, $_GET['cnib']) : false;


    if(!$cnib){
        
        return http_response_code(400);

    }

    $sql = "SELECT * FROM client WHERE cnib = '$cnib'";

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
