<?php
	include "conectar.php";
    $conn = conectarDB();
	

    $JSONData = file_get_contents("php://input");
	$dataObject = json_decode($JSONData);       
    
    $conn->set_charset('utf8');
    
    $nombre = $dataObject-> usuario;
	$usuario = $dataObject-> correo;
	$password =	$dataObject-> password;


	$idTipoUsuario= "2";	
	$clave = password_hash($password, PASSWORD_DEFAULT);
	
	

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO usuarios (usuario, clave, nombre, idTipoUsuario)
VALUES ('$usuario', '$clave', '$nombre', '$idTipoUsuario' )";
$borrador = "DELETE FROM usuarios WHERE usuario = ''";


if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}
if ($conn->query($borrador) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $borrador . "<br>" . $conn->error;
}
$conn->close();
	
//fuente https://www.w3schools.com/php/php_mysql_insert.asp
?>