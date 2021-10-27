<?php

    // appele de la connecion a la base de donnee
    require '../db_connexion.php';

    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata))
    {
        $request = json_decode($postdata,true);
        // Validate.
        if($request['idVehicule'] === '' || $request['idClient'] === '' || $request['montantVerse'] === '' )
        {

            return http_response_code(400);

        }

        $idVehicule = mysqli_real_escape_string($conn, trim($request['idVehicule']));
        $idClient = mysqli_real_escape_string($conn, trim($request['idClient']));
        $dateLocation = mysqli_real_escape_string($conn, trim($request['dateLocation']));
        $dateRemise = mysqli_real_escape_string($conn, trim($request['dateRemise']));
        // $idUser = mysqli_real_escape_string($conn, trim($request['idUser']));
        $nbJour = mysqli_real_escape_string($conn, trim($request['nbJour']));
        $montantLocation = mysqli_real_escape_string($conn, trim($request['montantLocation']));
        $montantVerse = mysqli_real_escape_string($conn, trim($request['montantVerse']));
        $montantRestant = mysqli_real_escape_string($conn, trim($request['montantRestant']));
        $objet = mysqli_real_escape_string($conn, trim($request['objet']));
        $modePayement = mysqli_real_escape_string($conn, trim($request['modePayement']));
        $status = mysqli_real_escape_string($conn, trim($request['status']));


        // Ajouter un location
        $sql = "INSERT INTO location (id,idUser,idVehicule,idClient,dateLocation,dateRemise,nbJour,montantLocation,montantVerse,montantRestant,objet,modePayement,status)
        VALUES (null,'1','$idVehicule','$idClient','$dateLocation','$dateRemise','$nbJour','$montantLocation','$montantVerse','$montantRestant','$objet','$modePayement','$status')";
    
        if($conn->query($sql))
        {
            http_response_code(201);
            
            $location = [
                'id' => mysqli_insert_id($conn),
                'vehicule' => $idVehicule,
                'client' => $idClient,
                'dateLocation' => $dateLocation,
                'nbJour' => $nbJour
            ];
            echo json_encode($location);
        }
        else
        {
            http_response_code(422);
        }
    }