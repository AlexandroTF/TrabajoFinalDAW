<?php
if(isset($_GET)){
    // COMPROBAMOS LOS DATOS QUE NOS HAN PASADO
    if(isset($_GET['code'])){ $code = $_GET['code']}
    if(isset($_GET['peticion'])){
        $peticion = $_GET['peticion'];
        // 'registradas' Devolverá un array con la gente que juegue
        // 'webhooks' Devolverá un array con los webhooks
    }
    if(isset($code) && isset($peticion)){
        if(strcmp($peticion, 'registradas') === 0){
            fnResponderPJs($code);
        }
        if(strcmp($peticion, 'webhooks') === 0){
            fnResponderWHs($code);
        }
    }else{
        //ERROR, CODIGO INDICADO ERRONEAMENTE
        echo('ERROR, CODIGO INDICADO ERRONEAMENTE');
        // Aqui debería devolver un objeto estandar con el valor ok si ha sido exitosa la peticion y con mensajes de error si ha fracasado
    }
}elseif(isset($_POST)){
    // COMPROBAMOS LOS DATOS QUE NOS HAN PASADO
    if(isset($_POST['code'])){ $code = $_POST['code']}
    if(isset($_POST['peticion'])){ $peticion = $_POST['peticion']}
    if(isset($_POST['pic'])){ $foto = $_POST['pic']}
    if(isset($_POST['name'])){ $nombre = $_POST['name']}
    if(isset($_POST['urlWH'])){ $urlWH = $_POST['urlWH']}
    if($code !== null && $peticion !== null){
        if(strcmp($peticion, 'crearSala')){
            fnCrearSala($code);
        }
        if(strcmp($peticion, 'crearPJ')){
            fnCrearPJ($code, $nombre, $foto);
        }
        if(strcmp($peticion, 'crearWH')){
            fnCrearWH($code);
        }
        if(strcmp($peticion, 'gameOver')){
            fnTerminarJuego($code);
            // fnBorrarPJs($code);
        }
        // acceder a la tabla y crear un nuevo registro tal que:
        // ID   || Nombre   ||  Foto    ||  Code    \\
    }else{
        // ERROR, ALGUNO DE LOS PARAMETROS HA SIDO INTRODUCIDO ERRONEAMENTE
        echo('ERROR, ALGUNO DE LOS PARAMETROS HA SIDO INTRODUCIDO ERRONEAMENTE')
        // Aqui debería devolver un objeto estandar con el valor ok si ha sido exitosa la peticion y con mensajes de error si ha fracasado
    }
}

// CLASE DEVUELTA
class Respuesta{
    // 
    public $ok = null;
    public $errorMsg = null;
    public $contenido = null;
}
// FUNCIONES
function fnResponderPJs($codigo){
    $resp = new Respuesta();
    // 
    return $resp;
}
function fnResponderWHs($codigo){
    $resp = new Respuesta();
    // 
    return $resp;
}
function fnCrearSala($codigo){
    $resp = new Respuesta();
    // 
    return $resp;
}
function fnCrearPJ($codigo, $nombre, $foto){
    $resp = new Respuesta();
    // 
    return $resp;
}
function fnCrearWH($codigo, $urlWH){
    $resp = new Respuesta();
    // 
    return $resp;
}
function fnTerminarJuego($codigo){
    $resp = new Respuesta();
    // IDEA: Cuando bot.js lea que el webhook dice "Fin del juego, gana: " o algo así, el bot elimina dicho webhook porque ese mensaje solo se enviará junto con esta funcion al terminar el juego
        // ALSO:comprobar que pasa con los mensajes de un webhook despues de eliminar ese webhook
    return $resp;
}
?>