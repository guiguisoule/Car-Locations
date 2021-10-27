<?php

	// appele de la connecion a la base de donnee
	require '../db_connexion.php';

	$cnib = ($_GET['cnib'] !== '')? mysqli_real_escape_string($conn, $_GET['cnib']) : false;

	if(!$cnib)
	{
		return http_response_code(400);
	}

	$sql = "DELETE FROM client WHERE cnib = '$cnib'";

	if($conn->query($sql))
	{
		return http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}