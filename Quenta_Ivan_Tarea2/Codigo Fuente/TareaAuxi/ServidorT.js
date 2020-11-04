// SERVIDOR UDP
const vector = process.argv;
var puerto = vector[2];
// Creamos datagrama
const { info, Console } = require('console');
var dgram = require('dgram');
// Creamos el socket con protocolo udp4
var server = dgram.createSocket("udp4");

// RECIBIR MENSAJE
// evento message, se ejecuta cada vez que nos llega un mensaje de un cliente

var arrayNombres = ["ivan josue","yoshua","jesus angel","renan manolo"];
var arrayApellidos = ["quenta vargas","lopez huanca","quispe mamani","quenta mercado"];
var arrayUsuario = ["iquentaquenta","ylopezhuanca","jquispemamani","rquentamercado"];
var arrayContra = ["123456","1q2w3e4","54321","1999"];

server.on("message", function (msg, client) {
    
    //console.log('############ Cliente datos> IP:', client.address + ' Puerto:', client.port +' ############');
    
    console.log("Cliente Conectado: "+msg+" ");
    //console.log('INFORMACION del SOCKET del Cliente: ',client);
   // const MjsOriginal_inforCliente = 'Mensaje Original= '+msg+'\nAddress= '+client.address+' Family= '+client.family+' Port= '+client.port; 
    // Creamos la var respuesta para enviar mensaje de respuesta al cliente
    var respuesta = msg.toString();
    var nom="";
    var pass="";
    var arrayN = respuesta.split('/');
    nom = arrayN[0];
    pass = arrayN[1];

    // console.log(nom);
    var indice = arrayNombres.indexOf(nom);
    
    
    // console.log(indice);

    if(arrayNombres.includes(nom) && arrayContra.includes(pass)){
        
        mensaje1  = "Bienvenido "+arrayNombres[indice] + " "+ arrayApellidos[indice] + " !!!!";
        server.send(mensaje1, 0, mensaje1.length, client.port, client.address, function () {
        });
    }
    else{
        mensaje2  =  "El usuario "+nom + " es incorrecto o no existe"; 
        server.send(mensaje2, 0, mensaje2.length, client.port, client.address, function () {
        });
    }
    
});

// modulo listening
server.on('listening', function () {
    // address es un objeto de donde utilizamos su address y puerto
    var address = server.address();
    //console.log(`server listening ${address.address}:${address.port}`);
    console.log('Servidor corriendo en el puerto: ' + address.port);
});
server.bind(puerto); 