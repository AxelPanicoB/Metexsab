<?php 
$destino = "axel.c.panico@gmail.com";
$nombre = $_POST["nombre"];
$numero = $_POST["numero"];
$empresa = $_POST["empresa"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];
$contenido = "Nombre: " . $nombre . "\nNumero: " . $numero . "\nEmpresa: " . $empresa . "\nCorreo: " . $correo . "\nMensaje: " . $mensaje; 
mail($destino,"Solicitud", $contenido);

?>