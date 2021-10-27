<?php

  	// appele de la connecion a la base de donnee
  	require '../db_connexion.php';

	$postdata = file_get_contents('php://input');

	if(isset($postdata) && !empty($postdata))
	{
		$request = json_decode($postdata,true);

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
        

		$sql = "UPDATE client SET nom='$nom',prenom='$prenom',sexe='$sexe',dateBirth='$dateBirth',prof='$prof',tel='$tel' WHERE cnib='$cnib'  LIMIT 1";
		
		if($conn->query($sql))
		{
			return http_response_code(204);
		}
		else
		{
			return http_response_code(422);
		}
	}