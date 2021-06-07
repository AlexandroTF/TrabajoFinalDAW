const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
const Discord = require('discord.js');
const cliente = new Discord.Client();

cliente.login('ODQ0MzAyMTI4NDczMzA5MTg0.YKQboQ.E5BfSxFxQXOWxufp_FLLLXps7QM');

cliente.on('ready', () => {
    console.log('Sesion iniciada');
    console.log(`El bot se ha loggeado como: ${cliente.user.tag}`);
    console.log(cliente.user.id);
})


    // fnEnviarUrlWebhook('url', 'hola')
    // pureJavascriptDoSomethingAJAX();
    a();

cliente.on('message', mensaje => {
    let msgSplited;
    if(mensaje.content.startsWith('>>code')){
        msgSplited = mensaje.content.split(' ');
        if(msgSplited[1] != null){
            mensaje.channel.send(`El codigo de la sala es: ${msgSplited[1]}`);
            // CREAR EL WEBHOOK
            let url = 'https://discord.com/api/webhooks/845022656109477908/hvtiQkt32ffBilcCdRH7Zbi5T_BEw_kGK0rro0sKS4dw-1LEHC5o6bPt0caYI0JuGnzd';
            // GRABAR EL WEBHOOK EN LA BDD
        }
    }else if(mensaje.content.startsWith('El codigo de la sala es:') && mensaje.author.id == cliente.user.id){
        // Recuperar el codigo de la sala
        msgSplited = mensaje.content.split(' ');
        let code = msgSplited['6'];
        // CREAR UN WEBHOOK CON EL CODIGO DE LA SALA
        mensaje.channel.createWebhook(`Sala ${code}`,  {
            avatar: 'https://i.picsum.photos/id/421/200/200.jpg?hmac=Kix073-H73pkRedH4XJ8fenHLI9Sd9akWlOFjKog0EA',
            reason: `Webhook que comenta la sala ${code}`,
        })
            .then(webhook => {
                console.log('webhook creado correctamente');
                console.log('----URL----');
                console.log(webhook.url);
                console.log('----id----');
                console.log(webhook.id);
                fnEnviarUrlWebhook(webhook.url, code);
            })
            .catch(console.error);
    }
})

// FUNCIONES
function fnWebHook(mensaje){
    $.ajax({
        url: 'https://discord.com/api/webhooks/845022656109477908/hvtiQkt32ffBilcCdRH7Zbi5T_BEw_kGK0rro0sKS4dw-1LEHC5o6bPt0caYI0JuGnzd',
        data: JSON.stringify({
            content: mensaje,
            avatar_url:	'https://picsum.photos/200/200',
            tts:	false,
            file:	null,
            embeds:	[],
            payload_json:	null,
            allowed_mentions: null,
        }),
        method: 'POST',
        headers: {"content-type": "application/json"}
    }).done((data) => {
        console.log(data);
        console.log('mensaje enviado 10/10');
    }).fail(() => {
        console.log('error')
    })
}
function fnEnviarUrlWebhook(urlHook, code){
    $.post('ajaxBDD.php',{
    }).done((data)=>{console.log(data);
    }).fail((jqXHR, textStatus, errorThrown)=>{console.log(errorThrown);
    })
    console.log('aios');
    // $.ajax({
    //     url: 'ajaxBDD.php',
    //     // url: 'https://discord.com/api/webhooks/845022656109477908/hvtiQkt32ffBilcCdRH7Zbi5T_BEw_kGK0rro0sKS4dw-1LEHC5o6bPt0caYI0JuGnzd',
    //     // url: 'http://192.168.1.205:80/Nueva%20carpeta/BOT/ajaxBDD.php',
    //     // data: {
    //     //     code: code,
    //     //     urlwh: urlHook,
    //     //     peticion: 'crearWH'
    //     // },
    //     // method: 'POST',
    // }).done((data) => {
    //     // Comprobar si el mensaje devuelto es correcto o incorrecto
    //     // console.log(data);
    //     console.log('Url del webhook enviado correctamente');
    // }).fail(( jqXHR, textStatus, errorThrown ) => {
    //     console.log('Error en la peticion, no se');
    //     console.log('----------------');
    //     console.log(textStatus);
    //     console.log('----------------');
    //     console.log(errorThrown);
    // })
}
function pureJavascriptDoSomethingAJAX() {
    var xhr = new XMLHttpRequest();

    // Enganchamos el evento cambio de estado de la conexión
    // para pintar la respuesta en el frontend..
    xhr.onreadystatechange = function (response) {
        if (xhr.readyState === 4) {
            console.log(response);
            console.log(xhr);
            // document.getElementById('txt-for-request-content').innerHTML =
            //     'AJAX response with pure Javascript:<br>' + xhr.responseText;
        }
    };

    // Otra forma de preparar los parámetros de la petición AJAX,,
    /* var data = new FormData();
    data.append('action', 'jnjtest');
    //data.append('var1', 'value1');
    //data.append('var2', 'value2');*/

    // Aquí la ruta al endpoint que queremos atacar,,
    xhr.open('POST', 'http://localhost/ajaxBDD.php');
    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    xhr.send();
    //xhr.send(data);
}
function a (){
const http = require('http'); // <- cargamos el módulo http

const puerto = 8080;
const server = http.createServer((req, res)=>{
    // 
    res.end();
})
server.listen(puerto, function(error){
    if(error){
        console.log('Algo anda mal')
    }else{
        console.log('servidor a la escucha en el 8080')
    }
})
$.post('http://localhost:80/Nueva%20carpeta/TrabajoFinalDAW/ajaxBDD.php',{
}).done((data)=>{console.log(data);
}).fail((jqXHR, textStatus, errorThrown)=>{console.log(errorThrown);
})

// const requestedHostname = 'http://192.168.1.205';
// const requestedPort = 80; // <- puerto de escucha del host
// const requestedPath = '/Nueva%20carpeta/TrabajoFinalDAW/ajaxBDD.php'; // <- :cantidad debe ser sustituido por un valor válido
// const headers = {
// //   'Authorization': 'Basic ' + 'Aqui pones tu token', // <- aqui puedes pasar el resultado de tu función que calcula el token
// }

// const requestOptions = {
//   hostname: requestedHostname,
//   port: requestedPort,
//   path: requestedPath,
//   method: 'POST',
//   headers: headers
// }
// console.log('hola,whats hapenning')
// const req = http.request(requestOptions, (response) => {
//   console.log(`STATUS: ${response.statusCode}`); // <- Vemos el estatus de la respuesta
//   console.log(`HEADERS: ${JSON.stringify(response.headers)}`); // <- vemos las cabeceras de la respuesta
//   response.setEncoding('utf-8'); // <- es el encoding más usual actualmente
//   response.on('data', (data) => {
//     console.log(data); // <- mostramos la data recibida
//     let receivedData = JSON.parse(data); // <- esto fallará si la respuesta no es un string JSON válido
//   });
// });

// req.on('error', (error) => {
//   console.log(`Error in request: ${error.message}`); // <- mostramos el error si lo hubo
// });

// req.end(console.log('receivedData')); // <- este comando finaliza la solicitud
}