<?php

    // appele de la connecion a la base de donnee
    require '../db_connexion.php';

    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata))
    {
        $request = json_decode($postdata,true);
        // Validate.
        if(trim($request['nom']) === '' || $request['prenom'] === '' || $request['cnib'] === '' || $request['tel'] === '' )
        {
            return http_response_code(400);

        }

        $cnib = mysqli_real_escape_string($conn, trim($request['cnib']));
        $nom = mysqli_real_escape_string($conn, trim($request['nom']));
        $prenom = mysqli_real_escape_string($conn, trim($request['prenom']));
        $sexe = mysqli_real_escape_string($conn, trim($request['sexe']));
        $dateBirth = mysqli_real_escape_string($conn, trim($request['dateBirth']));
        $prof = mysqli_real_escape_string($conn, trim($request['prof']));
        $tel = mysqli_real_escape_string($conn, trim($request['tel']));
        
        // Ajouter un client
        $sql = "INSERT INTO client (cnib,nom,prenom,sexe,dateBirth,prof,tel)
        VALUES ('$cnib','$nom','$prenom','$sexe','$dateBirth','$prof','$tel')";

        if($conn->query($sql))
        {
            http_response_code(201);
            
            $client = [
                'cnib' => mysqli_insert_id($conn),
                'nom' => $nom,
                'prenom' => $prenom
            ];
            
            echo json_encode($client);
        }
        else
        {
            return http_response_code(422);
        }
    }