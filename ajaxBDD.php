<?php
echo $_SERVER["REQUEST_METHOD"];
if($_SERVER["REQUEST_METHOD"] == 'GET'){
    // COMPROBAMOS LOS DATOS QUE NOS HAN PASADO
    if(isset($_GET['code'])){ $code = $_GET['code'];}
    if(isset($_GET['peticion'])){
        $peticion = $_GET['peticion'];
        // 'registradas' Devolverá un array con la gente que juegue
        // 'webhooks' Devolverá un array con los webhooks
    }
    if(isset($code) && isset($peticion)){
        if(strcmp($peticion, 'registradas') === 0){
            echo json_encode(fnResponderPJs($code));
        }
        if(strcmp($peticion, 'webhooks') === 0){
            echo json_encode(fnResponderWHs($code));
        }
    }else{
        //ERROR, CODIGO INDICADO ERRONEAMENTE
        echo('ERROR, CODIGO INDICADO ERRONEAMENTE EN GET');
        // Aqui debería devolver un objeto estandar con el valor ok si ha sido exitosa la peticion y con mensajes de error si ha fracasado
    }
}elseif($_SERVER["REQUEST_METHOD"] == 'POST'){
    // COMPROBAMOS LOS DATOS QUE NOS HAN PASADO
    if(isset($_POST['code'])){ $code = $_POST['code'];}
    if(isset($_POST['peticion'])){ $peticion = $_POST['peticion'];}
    if(isset($_POST['pic'])){ $foto = $_POST['pic'];}
    if(isset($_POST['name'])){ $nombre = $_POST['name'];}
    if(isset($_POST['urlWH'])){ $urlWH = $_POST['urlWH'];}
    if($code !== null && $peticion !== null){
        if(strcmp($peticion, 'crearSala') === 0){
			echo 'creando sala';
            echo json_encode(fnCrearSala($code));
        }
        if(strcmp($peticion, 'crearPJ') === 0){
			echo 'creando PJ';
			echo $code;
			echo $nombre;
			echo $foto;
            echo json_encode(fnCrearPJ($code, $nombre, $foto));
        }
        if(strcmp($peticion, 'crearWH') === 0){
            echo json_encode(fnCrearWH($code));
        }
        if(strcmp($peticion, 'gameOver') === 0){
            echo json_encode(fnTerminarJuego($code));
            // fnBorrarPJs($code);
        }
        // acceder a la tabla y crear un nuevo registro tal que:
        // ID   || Nombre   ||  Foto    ||  Code    \\
    }else{
        // ERROR, ALGUNO DE LOS PARAMETROS HA SIDO INTRODUCIDO ERRONEAMENTE
        echo('ERROR, ALGUNO DE LOS PARAMETROS HA SIDO INTRODUCIDO ERRONEAMENTE EN POST');
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
// CLASE BASE DE DATOS
class conectaBD{
	private $conn = null ;
	private static $instancia;
	private function __construct($database='tfg') { 
		$dsn ="mysql:host=localhost;dbname=$database;charset=utf8" ;
		try {
			$this->conn = new PDO( $dsn, 'root', '' ,array( PDO::ATTR_PERSISTENT => true));
		} catch ( PDOException $e) { 
			die( "¡Error!: " . $e->getMessage() . "<br/>"); 
			}
	}
	
	public static function singleton($database = 'tfg' ) {
	//método singleton que crea instancia sí no está creada 
		if (!isset(self::$instancia)) { 
			$miclase = __CLASS__; 
			
			self::$instancia = new $miclase ($database); 
		} 
		return self::$instancia; 
	}
	public function __clone(){
		trigger_error('La clonación de este objeto no está permitida', E_USER_ERROR);
	}
	public function __destruct(){ // Cierra conexión asignándole valor null
		$this->conn = null; 
		}
	public function creaTablaTask(){ // Crea tabla; devuelve TRUE si tiene exito y FALSE en caso contrario
		$sql = 'CREATE TABLE IF NOT EXISTS tasks ( task_id int NOT NULL AUTO_INCREMENT,
				subject varchar(255) DEFAULT NULL,
				start_date date DEFAULT NULL,
				end_date date DEFAULT NULL,
				description varchar(400) DEFAULT NULL,
				PRIMARY KEY (task_id)
				);';
		if( $this->conn->exec($sql) !== false) 
			return true;
		return false;
	}
	public function insertaPJ($id,$nombre,$picture,$code) {
		// Prepara y ejecuta consulta
		$datos=array(':id'=>$id, ':nombre'=>$nombre, ':picture'=>$picture, ':code'=>$code);
		$sql = ' INSERT INTO users (id, name, picture, code)
					VALUES ( :id , :nombre , :picture, :code ) ' ;
		$q = $this->conn->prepare($sql);
		return $q->execute($datos);
		}
	public function insertaHW($id,$code,$url) {
		// Prepara y ejecuta consulta
		$datos=array(':id'=>$id, ':code'=>$code, ':url'=>$url);
		$sql = ' INSERT INTO WH (id, code, url)
					VALUES ( :id , :code , :url ) ' ;
		$q = $this->conn->prepare($sql);
		return $q->execute($datos);
		}
	public function cambiaDescripcion($id_task,$descripcion){
		// Prepara y ejecuta consulta

		$sql = ' UPDATE tasks SET description = :descrip WHERE task_id = :tarea ' ;
		$q = $this->conn->prepare($sql);
		$q->bindParam(':descrip', $descripcion, PDO::PARAM_STR);
		$q->bindParam(':tarea', $id_task, PDO::PARAM_INT);
		
		return $q->execute();
		}
	public function borraPJs($code){ // Prepara y ejecuta consulta
		$datos=array(':code'=>$code);
		$sql = ' DELETE FROM users WHERE code=:code ' ;
		$q = $this->conn->prepare($sql);
		return $q->execute($datos);
	    }
	public function borraWHs($code){ // Prepara y ejecuta consulta
		$datos=array(':code'=>$code);
		$sql = ' DELETE FROM WH WHERE code=:code ' ;
		$q = $this->conn->prepare($sql);
		return $q->execute($datos);
	    }
	public function consultaPJ($code){ // Ejecuta consulta y devuelve array de resultados o FALSE sí falla ejecución
		$orden = "select * from users where code = '" . $code . "'";
		try { $q = $this->conn->query($orden);
				$filas=array();
				$q->setFetchMode(PDO::FETCH_ASSOC);
				while ( $r = $q->fetch() )
					$filas[]=$r;
				return $filas;
		} catch ( PDOException $e) {
				echo ( "¡Error! al ejecutar consulta: " . $e->getMessage() . "<br/>");
				return false; 
		}
	    }
	public function consultaWH($code){ // Ejecuta consulta y devuelve array de resultados o FALSE sí falla ejecución
		$orden = "select * from WH where code = " . $code;
		try { $q = $this->conn->query($orden);
				$filas=array();
				$q->setFetchMode(PDO::FETCH_ASSOC);
				while ( $r = $q->fetch() )
					$filas[]=$r;
				return $filas;
		} catch ( PDOException $e) {
				echo ( "¡Error! al ejecutar consulta: " . $e->getMessage() . "<br/>");
				return false; 
		}
	    }
	
}
// FUNCIONES
function fnResponderPJs($codigo){
    // Accede a la BDD y responde con un array de todas las personas que jueguen en esa sala
	$obj = conectaBD::singleton();
	$mis_PJs = $obj->consultaPJ($codigo);
	return $mis_PJs;
}
function fnResponderWHs($codigo){
    // Accede a la BDD y responde con un array de todos los webhooks de esa sala (idealmente no habría mas que una)
	$obj = conectaBD::singleton();
	$mis_WHs = $onj->consultaWH($codigo);
	return $mis_WHs;
    $resp = new Respuesta();
    // 
    return $resp;
}
function fnCrearSala($codigo){
    // Accede a la BDD y crea una tupla en la tabla de PJs con datos de ejemplo // ID   || Nombre:Sala   ||  Foto:null    ||  Code:$codigo    \\
	$obj = conectaBD::singleton();
	if ($obj->insertaPJ($id = 1, null, null, $codigo) !== false){
		return('se inserto con exito <br>');
	}
	else {
		return(' fallo al insertar');
	}
    $resp = new Respuesta();
    // 
    return $resp;
}
function fnCrearPJ($codigo, $nombre, $foto){
    // Accede a la BDD y crea una tupla en la tabla de PJs con los datos pasados // ID   || Nombre:$nombre   ||  Foto:$foto    ||  Code:$codigo    \\
	$obj = conectaBD::singleton();
	if ($obj->insertaPJ($id, $nombre, $foto, $codigo) !== false){
		return('se inserto con exito <br>');
	}
	else {
		return(' fallo al insertar');
	}
    $resp = new Respuesta();
    // 
    return $resp;
}
function fnCrearWH($codigo, $urlWH){
    // Accede a la BDD y crea una tupla en la tabla de WHs con los datos pasados    //  ID  ||  url:$urlWH  ||  Code:$codigo    \\
    $resp = new Respuesta();
	$obj = conectaBD::singleton();
	if ($obj->insertaHW($id, $codigo, $urlWH) !== false){
		return('se inserto con exito <br>');
	}
	else {
		return(' fallo al insertar');
	}
    // 
    return $resp;
}
function fnTerminarJuego($codigo){
    // Accede a la BDD y elimina todas las tuplas cuyo code sea $codigo
	$obj = conectaBD::singleton();
	$mis_tareas = $obj->borraPJs($codigo);

	$obj = conectaBD::singleton();
	$mis_tareas = $obj->borraWHs($codigo);
    $resp = new Respuesta();
    // IDEA: Cuando bot.js lea que el webhook dice "Fin del juego, gana: " o algo así, el bot elimina dicho webhook porque ese mensaje solo se enviará junto con esta funcion al terminar el juego
        // ALSO:comprobar que pasa con los mensajes de un webhook despues de eliminar ese webhook
    return $resp;
}
?>
