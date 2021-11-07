<?php
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
$response = array();
$upload_dir = 'uploads/';
$server_url = 'http://localhost/AdaptStorage/';

include "conectar.php";
$conn = conectarDB();
$conn->set_charset('utf8');

if($_FILES['documento'])
{
    $archivo_name = $_FILES["documento"]["name"];
    $archivo_tmp_name = $_FILES["documento"]["tmp_name"];
    $size = $_FILES["documento"]["size"];
    $error = $_FILES["documento"]["error"];
 
    if($error > 0){
        $response = array(
            "Código de error" => $error,
            "status" => "error",
            "error" => true,
            "message" => "Se encontraron errores en FILES"
        );
    }else
    {
        $upload_name = $upload_dir.strtolower($archivo_name);
        $upload_name = preg_replace('/\s+/', '-', $upload_name);
        $path = $server_url."/".$upload_name;
        $extension = pathinfo($path, PATHINFO_EXTENSION);
        $nombreArchivo = pathinfo($path, PATHINFO_FILENAME);
     
        if(move_uploaded_file($archivo_tmp_name , $upload_name)) {
            $response = array(
                "status" => "success",
                "error" => false,
                "message" => "Archivo subido a la carpeta de localhost",
                "url" => $server_url."/".$upload_name
              );
               
            date_default_timezone_set('America/Mexico_City');
            setlocale(LC_TIME, 'es_MX.UTF-8');
            $fecha_actual = date("Y-m-d"); 
            $sql = "INSERT INTO archivos (titulo, tipo, tamanio, ruta, fecha, contenido) values ('$nombreArchivo', '$extension', '$size', '$upload_name', '$fecha_actual', 'Prueba' )";
            if ($conn->query($sql) === TRUE) {
                //echo json_encode(array('conectado'=>"Registrado en la base de datos"));
              } else {
                //echo json_encode(array('conectado'=>"Hubo un error al registrar en la base de datos"));
              }
        }else
        {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error al subir el archivo a la carpeta localhost"
            );
        }
    }
 
}else{
    $response = array(
        "status" => "error",
        "error" => true,
        "message" => "Error total"
    );
}
 
echo json_encode($response);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

?>