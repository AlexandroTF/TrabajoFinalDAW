## Estructura general del documento

- **Portada:** debe mostrar el título, autor, tutor, ciclo, centro y fecha.
- **Índice**
- **Introducción:** Comienza con una motivación del proyecto (por qué es importante; vende tu proyecto), una visión general de los objetivos del mismo, tecnologías utilizadas, etc.
- **Planificación y seguimiento:** realiza una planificación temporal que cubra el periodo del proyecto, indicando los hitos (*milestones*) importantes que prevés, así como el seguimiento del mismo. Sírvete de algún sistema visual de panificación, como diagramas de gantt o tableros SCRUM/Kanban, documentando todo el proceso.
- **Cuerpo del documento:** estructura tu proyecto con las secciones que necesites y añádelas aquí (ej: revisión de tecnologías, integración de servicios, estructura principal del código, diagramas UML de clases/secuencia, despliegue de la aplicación, esquema ER de la base de datos...)
- **Conclusiones:** comenta el resumen de los principales logros y aportaciones de tu trabajo, observaciones, dificultades encontradas, etc.
- **Trabajo futuro:** en base a tu experiencia, realiza sugerencias de trabajo futuro que se podría seguir realizando para expandir el proyecto.
- **Anexos:** expón aquí cualquier contenido que rompiese el flujo normal del documento en las secciones previas, como diagramas adicionales, documentación de APIs, materiales adicionales, etc. Esta es la única sección prescindible que puede no aparecer si no la necesitas.
- **Bibliografía:** enumeración de los recursos de los que te hayas valido para realizar el proyecto: libros, artículos, páginas web, etc. Indica siempre la fecha, autor, título y editorial, revista o URL.

# Battle Simulator Bot for Giveaways.
<!-- 
## Portada
### Battle Simulator Bot for Giveaways. -->
##### Alumno: Alexandro Tejada Flores
##### Tutores: Fran y Raúl
###### IES Enrique Tierno Galvan, Madrid, España.
###### Lunes 7 de Junio de 2021.

## Índice
 - Introducción
 - Planificación y seguimiento
 - Cuerpo del documento
 - Conclusiones
 - Trabajo futuro
 - Anexos
 - Bibliografía

## Introducción
_Battle Simulator Bot for Giveaways_ es un proyecto orientado al entretenimiento online, sirve para gestionar sorteos con una capa de ludificación haciendo que sea a su vez material de entretenimiento.
Está pensada para que creadores de contenido online gestionen sorteos o lo usen como mero sistema de entretenimiento.

#### Como surgió la idea?
La idea del proyecto surgio resultado de unificar funcionalidades que yo quería conocer y aprender a usar por un lado y por el otro la observacion de una herramienta similar pero carencia de determinadas caracteristicas. Las funcionalidades que yo buscaba conocer y aprender a usar eran los bots de distintas plataformas: twitter, discord, telegram, entre otros.
La herramienta similar es hunger games simulator , una pagina web en la que se narran por texto batallas simuladas entre los participantes designados.
La particularidad de hunger games simulator es que unicamente puede añadir los participantes la persona que accede a la pagina, es decir, todo es local y sin embargo he visto a lo largo del tiempo gente que lo usa como entretenimiento simulando batallas con amigos o gente a la que conoce por redes sociales además de conocer a al menos un creador de contenido en internet que hace retransmisiones que ocasionalmente usa la pagina para hacer un sorteo. Al ser tan local se tienen que introducir todos los participantes uno a uno, es por eso que nace este proyecto, una herramienta similar con mejoras, la principal es la posibilidad de añadir participantes de forma remota aunque

#### Una visión general de los objetivos del mismo
 - Crear una aplicacion web que simule batallas todos contra todos
 - Permitir a otros usuarios introducir participantes desde otro dispositivo a una misma partida
 - Narrar la simulación no solo en la pantalla de la persona que creó la partida sino tambien es distintas aplicaciones gracias a bots

#### Tecnologías utilizadas
 - HTML y CSS
 - JavaScript y jQuery
 - PHP
 - NodeJS
    - Discord.js
    - Dom
    - jquery
 - MySQL
 - Postman
 - XAMPP
 - Github
 - Visual Studio Code

## Planificación y seguimiento

#### Planificación
El desarrollo del proyecto se divirá en 3 secciones
 - Diseño
 - Producción
 - Comprobación y corrección de errores
El diseño ocupará las primeras 3 semanas, es decir, del 12 de abril al 2 de mayo aproximadamente.
La produccion ocupará el las siguientes 4 semanas, es decir, del 3 de mayo al 30 de mayo aproximadamente.
La comprobacion y correccion de errores ocupará unicamente la ultima semana, es decir del 31 de mayo al 6 de junio.

#### Seguimiento
La primera etapa, la de diseño, ha cumplido los tiempos previstos, dejando espacio para desarrollar incluso la interfaz de las paginas web.
La segunda etapa, la de producción, se ha ralentizado las primeras 2 semanas y se ha alargado ocupando parte del tiempo de la fase de comprobacion de errores, parte de este retraso se ha debido a una reestructuración de la base de datos.

## Cuerpo del documento
(ej: revisión de tecnologías, integración de servicios, estructura principal del código, diagramas UML de clases/secuencia, despliegue de la aplicación, esquema ER de la base de datos...)
 - MasterJs
     - Ajax
         - RecibirPJs
         - RecibirWHs
         - CrearSala
         - EnviarWHs
     - Funciones de sucesos
 - HijosSj
     - Ajax
         - ComprobarSala
         - EnviarDatos
         - Converti img a base64
 - Base de datos
     - Tablas
     - Relaciones
 - AjaxBDD
     - Manejar la peticion
     - ConctaSB
     - Funciones
         - responder
         - crear
         - terminar juego
 - Bot.js
     - Comando
     - Crear WH y enviarlo

## Conclusiones
<!-- cosas conseguidas, inconvenientes encontrados, etc. -->
En este proyecto se ha conseguido conectar correctamente la base de datos con el archivo PHP
#### Problemas encontrados
A lo largo del desarrollo del proyecto se han encontrado diversos problemas como los que vamos a listar a continuación
###### Enviar imagenes desde clienteHija por ajax
Al intentar enviar imagenes por ajax me di cuenta de que por las peticiones ajax solo permiten el envio de informacion como una cadena de texto plano por lo que en caso de ser un url a una imagen de internet no habría problema puesto que sería una url pero al ser un archivo no funcionaría igual. Se plantearon 2 soluciones:
 - Enviar las imagenes al servidor como archivo y almacenarla ahí, tambien guardar en la base de datos la ruta del servidor donde se encuentra la imagen
 - Transformar las imagenes a Base64 que es texto plano que se puede almacenar facilmente en variables.
La solucion fue precisamente esta segunda opcion, convertir las imagenes a base64 y almacenar el texto resultado en la base de datos.

Un segundo problema encontrado fue

## Trabajo futuro
Como trabajo futuro se han planeado numerosas funcionalidades que añadir.
 - La inclusion de mas plataformas con las que conectar el  
