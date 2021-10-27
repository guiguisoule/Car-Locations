<?php

    // appele de la connecion a la base de donnee
    require '../db_connexion.php';

    $matricule = ($_GET['matricule'] !== '') ? mysqli_real_escape_string($conn, $_GET['matricule']) : false;


    if(!$matricule){
        
        return http_response_code(400);

    }

    $sql = "SELECT * FROM vehicule WHERE matricule = '$matricule'";

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
