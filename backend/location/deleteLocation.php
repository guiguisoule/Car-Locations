<?php

	// appele de la connecion a la base de donnee
	require '../db_connexion.php';

	$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($conn, (int)$_GET['id']) : false;

	if(!$id)
	{
		return http_response_code(400);
	}

	$sql = "DELETE FROM location WHERE id = $id";

	if($conn->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}