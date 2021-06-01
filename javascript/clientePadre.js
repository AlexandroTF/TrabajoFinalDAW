const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

/**Clases
 * Persona
 * Arma
 * Sitio
 */
class Persona{
    constructor(nombre, imagen, nEquipo){
        this.nombre = nombre;
        this.imagen = imagen;
        this.equipo = nEquipo;
        this.salud = 10;
        this.energia = 10;
        this.nManosLibres = 2;
        this.arrAliados = new Array();
        this.arrCompa = new Array();
        this.arrEnemigos = new Array();
        this.manos = new Array();
    }
}
class Arma{
    constructor(nombre, danno, nManos, hiriente){
        this.nombre = nombre;
        this.danno = danno;
        this.nManos = nManos;
        this.hiriente = hiriente;
        /** Municion o numero de ataques por cada vez */
    }
}
class Sitio{
    constructor(nombre, contenido, evento){
        this.nombre = nombre;
        this.contenido = contenido;
        this.evento = evento;
    }
}
let arrayDeJuego =  new Array();

document.addEventListener("readystatechange", cargarEventos, false);
function cargarEventos(evento){
	if(document.readyState == "interactive"){ 
        // 
        // GENERAR EL CODIGO
        const code = generacionDelCodigo();
        console.log(code);
        $('.code').html(code);
        // grabarCodigo(code);

        // ACTUALIZAR Y AÑADIR GENTE
        // ESCUCHADORES
        $("img.btnCerrar").on("click", fnExpulsarJugador);
        $("div.ok").on("click", fnStartGame);
        $(".addbot").on("click", ()=>{
            // Hacer esto con un modal si es posible
            let nombre = prompt("Nombre");
            let imagen = prompt("ruta imagen");
            participantes[0][participantes[0].length] = nombre;
            participantes[1][participantes[1].length] = imagen;
            fnActualizarLista(nombre, imagen);
            //console.log(participantes)
            //fnActualizarLista();
        })

        // PRUEBA
        //let participantes = [[],[]]
        let participantes = [["Agente 1", "Agente A", "AGENTE", "etnegA", "aGENTE CAPS", "Agenten't"],["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/300/200", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]]
        //fnCrearLista()

        //the way we control that people appears only once per day
        //Para cada día:
        function fnNuevoDia(){
            let personasPorInteractuar = new Array;
            arrayDeJuego.forEach(p => {
                if(p.salud > 0){
                    personasPorInteractuar.push(p)
                }
            });
            personasPorInteractuar = personasPorInteractuar.sort((a, b) => 0.5 - Math.random());
            let currentPJ = personasPorInteractuar.pop;
            eventoEncontrarAlgo(currentPJ);
        }


        //COSAS
        const recursos = ["comida", "un cura-heridas", "papel y boli"];
        const armas = [new Arma("Padota", 6, 2, false), new Arma("La pipa de la paz", 3, 1, true), new Arma("Lo de los pixeles del patojuego", 20, 2, false)];
        const sitios = ["una tienda de todo a 100 abandonada", "una casa-arbol", "un templo de dioses olvidados"];


    function fnActualizarChat(){
        console.log("imagen subida");
        // $.ajax({
        //     url: "chatlog.txt",
        //     cache: false,
        //     success: function(html){		
        //         $(".chat")[0].html(html); //Insert chat log into the #chatbox div
        //         console.log(html); //Insert chat log into the console.log
        //     },
        // });
    }
    function fnWebHook(){
        $.ajax({
            url: 'https://discord.com/api/webhooks/845022656109477908/hvtiQkt32ffBilcCdRH7Zbi5T_BEw_kGK0rro0sKS4dw-1LEHC5o6bPt0caYI0JuGnzd',
            data: JSON.stringify({
                content: 'hola'
            }),
            content: "hola"
        }).done((data) => {
            console.log(data);
            console.log('mensaje enviado 10/10');
        }).fail(() => {
            console.log('error');
        });
    }
    function fnCrearLista(){
        const cont = $(".showpeople")[0]
        //
        for(let i = 0; i<participantes[0].length; i++){
            //hacer equipo
            let equipo = document.createElement("div");
            equipo.setAttribute("class", "equipo");
            cont.appendChild(equipo)
            
            let pj, imagen, nombre, txtNombre;
            
            i--;
            for(let j=0; j<3; j++){
                if(i<(participantes[0].length-1)){
                    i++;
                    pj = document.createElement("div")
                    pj.setAttribute("class", "persona")
                    equipo.appendChild(pj)
                    imagen = document.createElement("img")
                    imagen.setAttribute("src", participantes[1][i])
                    imagen.setAttribute("class", "miniavatar")
                    pj.appendChild(imagen);
                    imagen2 = document.createElement("img")
                    imagen2.setAttribute("src", "img/times-solid.svg")
                    imagen2.setAttribute("class", "btnCerrar")
                    pj.appendChild(imagen2);
                    nombre = document.createElement("p")
                    nombre.setAttribute("class","mininame")
                    pj.appendChild(nombre);
                    txtNombre = document.createTextNode(participantes[0][i])
                    nombre.appendChild(txtNombre);
                }else{
                    console.log("Error, miembro del equipo inexistente")
                }
            }
        }
    }
    function fnActualizarLista(nmbr, imgn){
        let introducido = false;
        for(let i = 0; i<$(".equipo").length; i++){
            if($(".equipo")[i].children.length > 2 ){
                console.log("equipo lleno")
            }else{
                console.log("aun queda espacio")
                pj = document.createElement("div")
                pj.setAttribute("class", "persona")
                $(".equipo")[i].appendChild(pj)
                imagen = document.createElement("img")
                imagen.setAttribute("src", imgn)
                imagen.setAttribute("class", "miniavatar")
                pj.appendChild(imagen);
                imagen2 = document.createElement("img")
                imagen2.setAttribute("src", "img/times-solid.svg")
                imagen2.setAttribute("class", "btnCerrar")
                pj.appendChild(imagen2);
                nombre = document.createElement("p")
                nombre.setAttribute("class","mininame")
                pj.appendChild(nombre);
                txtNombre = document.createTextNode(nmbr)
                nombre.appendChild(txtNombre);
                introducido = true;
                break;
            }
        }
        if(!introducido){
            console.log("nuevo equipo")
            equipo = document.createElement("div")
            equipo.setAttribute("class", "equipo")
            $(".equipo")[0].parentElement.appendChild(equipo)
            pj = document.createElement("div")
            pj.setAttribute("class", "persona")
            equipo.appendChild(pj)
            imagen = document.createElement("img")
            imagen.setAttribute("src", imgn)
            imagen.setAttribute("class", "miniavatar")
            pj.appendChild(imagen);
            imagen2 = document.createElement("img")
            imagen2.setAttribute("src", "img/times-solid.svg")
            imagen2.setAttribute("class", "btnCerrar")
            pj.appendChild(imagen2);
            nombre = document.createElement("p")
            nombre.setAttribute("class","mininame")
            pj.appendChild(nombre);
            txtNombre = document.createTextNode(nmbr)
            nombre.appendChild(txtNombre);
            introducido = true;
        }
        $("img.btnCerrar").on("click", fnExpulsarJugador)
    }
    function fnExpulsarJugador(event){
        let hijos = this.parentNode.parentNode.children.length
        if(hijos == 1){
            this.parentNode.parentNode.remove();
        }
        this.parentNode.remove()
    }
    function fnStartGame(){
        //Llenado de datos a la tabla
        for(let i = 0; i<$(".equipo").length; i++){
            for(let j=0; j<$(".equipo")[i].children.length; j++){
                let persona = $(".equipo")[i].children[j]
                //console.log(persona);
                arrayDeJuego[arrayDeJuego.length] = new Persona(persona.lastChild.innerHTML, persona.firstChild.src, i)
            }
        }
        fnCompletarPersonas()
        console.log(arrayDeJuego)
        // Aqui empezaría el juego o algo así
    }
    //llena a las personas con sus amistades(añade a sus compas de equipo a amigos)
    function fnCompletarPersonas(){
        for(let i = 0; i < arrayDeJuego.length; i++){
            //
            for(let j = i+1; j < arrayDeJuego.length; j++){
                if(arrayDeJuego[i].equipo == arrayDeJuego[j].equipo){
                    //console.log(arrayDeJuego[i].nombre + " y " + arrayDeJuego[j].nombre + " son amiguis");
                    arrayDeJuego[i].arrAliados[arrayDeJuego[i].arrAliados.length] = arrayDeJuego[j].nombre;
                    arrayDeJuego[j].arrAliados[arrayDeJuego[j].arrAliados.length] = arrayDeJuego[i].nombre;
                }
            }
        }
    }
    /** GENERATION OF THE CODE
     * RETURNS DE CODE(String, 6 letters)
    */
    function generacionDelCodigo(){

        // const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'K', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        let code = '';
        for(let i = 0; i<6; i++){
            code = code + letras[Math.floor(Math.random()*letras.length)]
        }
        return code;
    }
    function grabarCodigo(codigo){
        $.ajax({
            url: '',/*Aquí iría el archivo PHP*/
            method: 'POST',
            headers: {"content-type": "application/json"},
            data: JSON.stringify({
                code: codigo,
            })
        }).done((data) => {
                //controlar no solo que la coneccion haya ido bien sino tambien que nos devuelva la respuesta correcta o un mensaje de "error, fallo en la coneccion con la BDD"
                console.log(data);
                console.log('Codigo enviado correctamente');
        }).fail(() => {
            console.log('Error, el codigo no ha podido ser enviado')
        })
    }
    function comprobarNuevosJugadores(codigo){
        $.ajax({
            url: '',/*Aquí iría el archivo PHP*/
            method: 'GET',
            headers: {"content-type": "application/json"},
            data: JSON.stringify({
                code: codigo,
            })
        }).done((data) => {
            let datos = JSON.parse(data);
            // Supongamos que devuelve esto
            let participantes = [["id1", "imagen", "AGENTE", "etnegA", "aGENTE CAPS", "Agenten't"],["https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/200/300", "https://picsum.photos/300/200", "https://picsum.photos/200/300", "https://picsum.photos/200/300"]]
            // comprobamos los nombres, supongo;
                if(datos.nuevos != null){
                    // fnActualizarLista(nombre, imagen)
                }
                console.log(data);
                console.log('Codigo enviado correctamente');
        }).fail(() => {
            console.log('Error, el codigo no ha podido ser enviado')
        })
    }
    function obtenerWebHook(){
        // 
        $.ajax({
            url: '',/*Aquí iría el archivo PHP*/
            method: 'GET',
            headers: {"content-type": "application/json"},
            data: JSON.stringify({
                code: codigo,
            })
        }).done((data) => {
            let datos = JSON.parse(data);
            urlWebHook = data.url;
            console.log('Url del webhook recuperado correctamente');
        }).fail(() => {
            console.log('Error, no se ha podido acceder ni recuperar el webhook')
        })
    }
    function fnWebHook(mensaje, url, avatarPic = 'https://picsum.photos/200/200'){
            $.ajax({
                url: url,
                data: JSON.stringify({
                    content: mensaje,
                    avatar_url:	avatarPic,
                    tts:	false,
                    file:	null,   
                    embeds:	[],
                    payload_json:	null,
                    allowed_mentions: null,
                }),
                method: 'POST',
                headers: {"content-type": "application/json"}
            }).done((data) => {
                console.log('mensaje enviado');
            }).fail(() => {
                console.log('error')
            })
    }
    // function eventoEncontrarAlgo(Persona){
    //     //
    //     let nEncontrado = 0;
    //     switch(Math.floor(Math.random()*3)){
    //         case 0:
    //                 console.log(Persona.nombre + " ha encontrado recursos");
    //                 nEncontrado = Math.floor(Math.random()*recursos.length);
    //                 console.log("ha encontrado " + recursos[nEncontrado]);
    //             break;
    //         case 1:
    //             console.log(Persona.nombre + " ha encontrado un arma");
    //             nEncontrado = Math.floor(Math.random()*armas.length)
    //             console.log("ha encontrado " + armas[nEncontrado].nombre);
    //             //Persona se guarda el arma en el inventario, la deja o en su defecto la intercambia segun la cantidad de manos que tenga ocupadas
    //             break;
    //         case 2:
    //             console.log(Persona.nombre + " ha encontrado un sitio");
    //             nEncontrado = Math.floor(Math.random()*sitios.length)
    //             console.log("ha encontrado " + sitios[nEncontrado]);
    //             /** Comprobar la compañia de la gente, uno encuentra  y todos encuentran*/
    //         break;
    //         default:
    //             console.log("Adios");
    //     }
    // }
    function eventoEncontrarAlgo(Persona){
        //
        let nEncontrado = 0;
        switch(Math.floor(Math.random()*3)){
            case 0:
                    console.log(Persona.nombre + " ha encontrado recursos");
                    nEncontrado = Math.floor(Math.random()*recursos.length)
                    console.log("ha encontrado " + recursos[nEncontrado]);
                break;
            case 1:
                console.log(Persona.nombre + " ha encontrado un arma");
                nEncontrado = Math.floor(Math.random()*armas.length)
                let armaEncontrada = armas[nEncontrado];
                console.log("ha encontrado " + armaEncontrada.nombre);
                //Persona se guarda el arma en el inventario, la deja o en su defecto la intercambia segun la cantidad de manos que tenga ocupadas
                
                // Contar las manos ocupadas y libres
                let manosLibres = Persona.nManosLibres;
                // let manosOcupadas = 0;
                // for(const i in Persona.manos){
                //     manosOcupadas = manosOcupadas + Persona.manos[i].nManos;
                // }
                // Si tiene manos libres suficientes la coge
                if(manosLibres >= armaEncontrada.nManos){
                    // Recoger el arma
                    Persona.manos.push(armaEncontrada);
                }else if(armaEncontrada.danno > Persona.manos[Persona.manos.length-1]){
                    // Cambia el arma con menos daño por la nueva
                    /** Hay que controlar si el arma con menos daño es sin manos para no quitarla porque no hace falta */
                    let armavieja;
                    do{
                        armavieja = Persona.manos.pop();
                        manosLibres = manosLibres + armavieja.nManos;
                    }while(manosLibres < armaEncontrada.manos)
                    Persona.manos.push(armaEncontrada);
                }else{
                    // Do nothing
                    // Esconde un poco el arma para que nadie más la encuentre
                }
                break;
            case 2:
                console.log(Persona.nombre + " ha encontrado un sitio");
                nEncontrado = Math.floor(Math.random()*sitios.length)
                console.log("ha encontrado " + sitios[nEncontrado]);
                sitios[nEncontrado].evento(Persona);
            break;
            default:
                console.log("Error: se ha encontrado un error, situacion irrealizable, ESCAPA");
                console.log("DONT DEAD");
                console.log("OPEN INSIDE");
        }
    }
    function eventoEncontrarAlguien(Persona, p2, hostilidad = 50){
        let nRand = Math.floor(Math.random*101);
        /** CONTROLAR LA PREFERENCIA DE HOSTILIDAD SELECCIONADA*/
        /** CONTROLAR LA RELACIONES DE ALIANZAS PREVIAS O ENEMISTADES*/
        if(Persona.arrAliados.includes(Persona.nombre)){nRand += (hostilidad*0.25)}
        // if(Persona.arrEnemigos.includes(Persona.nombre)){nRand -= (hostilidad*0.25)}

        if(nRand > hostilidad){
            // Encuentro no hostil
            /** En principio solo puede ser una ALIANZA, los trueques no estarán habilitados(de momento) */

            // ALIANZA
            fnAlianza(Persona, p2);
        }else{
            // Encuentro hostil
            nRand = Math.floor(Math.random()*100);
            /** Si queremos que se pueda seleccionar la agresividad de la peña, aqui */
            if(nRand > 50){
                // FLIGHT // HUIDA
                console.log(Persona.nombre + " se encuentra con " + p2.nombre + " pero decide huir");
            }else{
                // FIGHT // PELEA
                fnCombate(Persona, p2);
            }
        }
    }
    function fnAlianza(p1, p2){
        if(p1.arrAliados.includes(p2.nombre)){
            // ALIANZA DURADERA
            
            p1.arrCompa.push(p2.nombre);
            p2.arrCompa.push(p1.nombre);
        }else if(p1.arrEnemigos.includes(p2.nombre)){
            // IMPOSIBLE ALIANZA
        }else{
            // ALIANZA MOMENTANEA
        }
    }
    function fnCombate(p1, p2){
        // CALCULAR LOS BANDOS
        let bando1, bando2;
        bando1 = new Array;
        bando1.push(p1);
        p1.arrCompa.forEach(nombreCompa => {
            arrayDeJuego.forEach(p => {
                if(nombreCompa == p.nombre){
                    bando1.push(p);
                }
            })
        });
        p2.arrCompa.forEach(nombreCompa => {
            arrayDeJuego.forEach(p => {
                if(nombreCompa == p.nombre){
                    bando2.push(p);
                }
            })
        });
        // CALCULO DE DAÑO POR EQUIPO
        bando1.forEach(p => {
            let danoPorPersona = 0
            p.manos.forEach(arma => {
                dannoPorPersona += arma.danno;
            })
            if(dannoPorPersona == 0){ dannoPorPersona = 1}
            dannoPorMano1 += dannoPorPersona;
        })
        bando1.forEach(p => {
            let dannoPorPersona = 0
            p.manos.forEach(arma => {
                dannoPorPersona += arma.danno;
            })
            if(dannoPorPersona == 0){ dannoPorPersona = 1}
            dannoPorMano1 += dannoPorPersona;
        })



        

    }

    //
    // https://codepen.io/airnan/full/PWmRMe
    // https://medium.com/davao-js/tutorial-creating-a-simple-discord-bot-9465a2764dc0
    // https://youtu.be/EUB777JJT5E

    // // DISCORD WEBHOOKS
    // https://youtu.be/-4Lid7tBr6Y
    // https://discord.com/developers/docs/resources/webhook#get-webhook
    //
    }
}
