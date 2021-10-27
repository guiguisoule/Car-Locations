<?php

  	// appele de la connecion a la base de donnee
  	require '../db_connexion.php';

	$postdata = file_get_contents('php://input');

	if(isset($postdata) && !empty($postdata))
	{
		$request = json_decode($postdata,true);

        if(trim($request['id']) === '' || $request['idVehicule'] === '' || $request['idClient'] === '' || $request['montantVerse'] === '' )
        {

            return http_response_code(400);

        }

        $id = mysqli_real_escape_string($conn, (int)$request['id']);
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

        // Mise a jour de la location
		$sql = "UPDATE location SET idUser='1',idVehicule='$idVehicule',idClient='$idClient',dateLocation='$dateLocation',dateRemise='$dateRemise',nbJour='$nbJour',montantLocation='$montantLocation',montantVerse='$montantVerse',montantRestant='$montantRestant',objet='$objet',modePayement='$modePayement',status='$status' WHERE id=$id LIMIT 1";
		
		if($conn->query($sql))
		{
			return http_response_code(204);
		}
		else
		{
			return http_response_code(422);
		}
	}