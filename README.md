# Battle Simulator Bot for Giveaways.

##### Alumno: Alexandro Tejada Flores
##### Tutores: Francisco José Garrido Estevez y Raúl Gallego Pastor
###### IES Enrique Tierno Galvan, Madrid, España.
###### Lunes 7 de Junio de 2021.

## Introducción
_Battle Simulator Bot for Giveaways_ es un proyecto orientado al entretenimiento
online, sirve para gestionar sorteos con una capa de ludificación haciendo
que sea a su vez material de entretenimiento.
Está pensada para que creadores de contenido online, principalmente en
retransmisiones en directo, gestionen sorteos o lo usen como mero sistema
de entretenimiento.
La aplicación está pensada para funcionar tal que la persona creadora de
contenido enseña a su público la página web desde su pantalla mientras crea
la sala. El público entra a su vez en la página, pulsa en el botón para unirse a
una sala, introduce su nombre y su imagen y las envía indicando el código
que ha visto en la pantalla de la persona creadora de contenido. En ese
momento o pocos instantes después aparecería el nombre y la imagen
enviados en la pantalla de la persona creadora de contenido, donde se podría
comprobar si algún dato se ha introducido de forma errónea por acción del
usuario. La persona creadora de contenido, al poder eliminar de la lista de los
usuarios, puede ordenarlos para formar los equipos que desee o incluso jugar
con equipos de 2 personas antes de que la funcionalidad de los ajustes de
partida esté disponible. Una vez se muestran todos los participantes, quien
creó la sala pulsará el botón de comenzar y el de continuar para que vayan
apareciendo por pantalla los mensajes de las interacciones entre
participantes mientras se va comentando entre el público y la persona
creadora de contenido. Cuando se termine el juego saldrá un mensaje con la
persona ganadora y la creadora de contenido se encargará de darle el premio
del sorteo en el caso de que haya estado usando la aplicación para sortear
algo.

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

## Cuerpo del documento
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

## Trabajo futuro
Como trabajo futuro se han planeado numerosas funcionalidades que añadir.
 - Mejorar la interfaz al crear participantes desde la pantalla de juego.
 - La inclusión de más plataformas con las que conectar el envío de mensajes (Telegram, Twitter, Twitch, Instagram, Youtube, etc).
 - Añadir mayor complejidad a los participantes y a sus interacciones ya sean un inventario de recursos y armas, la agresividad, intercambios de recursos y hacer alianzas.
 - Crear un enlace que se muestre en la pantalla principal que permita unirse directamente sin tener que indicar aparte el código de la sala.
 - Traducir los textos de la aplicación a diferentes idiomas como el inglés o el catalán
 - Añadir una pantalla de configuración para la pantalla de juego en la que antes de empezar se podrán cambiar variables como la hostilidad (reduce la probabilidad de encuentros en los que la gente no se ataca e incrementa la de los encuentros en los que hay combate), la probabilidad para encontrar recursos o la probabilidad de que se cruzan varios jugadores (independientemente de si en con intención hostil o no).
 - Añadir un registro al finalizar el sorteo para ver qué ha hecho cada participante, quien ha hecho más cantidad de daño o menos cantidad de daño para otorgarles un título.
