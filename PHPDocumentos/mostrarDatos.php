<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");

include "conectar.php";
$array = array();
$conn = conectarDB();

$sql = 'SELECT titulo, tipo, tamanio, fecha, namePropietario, nivel_seguridad FROM archivos ORDER BY titulo';
$ejecutar = mysqli_query($conn,$sql);


while($fila = mysqli_fetch_assoc($ejecutar)) {
    $vector[] = array(
      "titulo" => $fila['titulo'],
      "tipo" => $fila['tipo'],
      "tamanio" => $fila['tamanio'],
      "fecha" => $fila['fecha'],
      "name" => $fila['namePropietario'],
  	  "nivel" => $fila['nivel_seguridad']); }
      
$conn->close();
$json = json_encode($vector);

echo $json;
?>