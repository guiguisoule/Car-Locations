<?php

	// appele de la connecion a la base de donnee
	require '../db_connexion.php';

	$matricule = ($_GET['matricule'] !== '' )? mysqli_real_escape_string($conn, $_GET['matricule']) : false;

	if(!$matricule)
	{
		return http_response_code(400);
	}

	$sql = "DELETE FROM vehicule WHERE matricule = '$matricule'";

	if($conn->query($sql))
	{
		return http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}