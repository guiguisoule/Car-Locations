<?php

  	// appele de la connecion a la base de donnee
  	require '../db_connexion.php';

	$postdata = file_get_contents('php://input');

	if(isset($postdata) && !empty($postdata))
	{
		$request = json_decode($postdata,true);

        if(trim($request['matricule']) === '' || $request['marque'] === '' || $request['serie'] === '' || $request['montantLocation'] === '' )
        {

            return http_response_code(400);

        }

        $matricule = mysqli_real_escape_string($conn, trim($request['matricule']));
        $type = mysqli_real_escape_string($conn, trim($request['type']));
        $serie = mysqli_real_escape_string($conn, trim($request['serie']));
        $place = mysqli_real_escape_string($conn, trim($request['place']));
        $marque = mysqli_real_escape_string($conn, trim($request['marque']));
        $couleur = mysqli_real_escape_string($conn, trim($request['couleur']));
        $place = mysqli_real_escape_string($conn, trim($request['place']));
        $montantLocation = mysqli_real_escape_string($conn, trim($request['montantLocation']));
        $dateCre = mysqli_real_escape_string($conn, trim($request['dateCre']));
        $dateMaj = mysqli_real_escape_string($conn, trim($request['dateMaj']));
        $status = mysqli_real_escape_string($conn, trim($request['status']));
        $etat = mysqli_real_escape_string($conn, trim($request['etat']));
        $image = mysqli_real_escape_string($conn, trim($request['image']));

        // Mise a jour du vehicule
		$sql = "UPDATE vehicule SET type='$type',marque='$marque',serie='$serie',couleur='$couleur',place='$place',montantLocation='$montantLocation',dateCre='$dateCre',dateMaj='$dateMaj',status='$status',etat='$etat',image='$image' WHERE matricule='$matricule' LIMIT 1";
		
		if($conn->query($sql))
		{
			http_response_code(204);
		}
		else
		{
			return http_response_code(422);
		}
	}