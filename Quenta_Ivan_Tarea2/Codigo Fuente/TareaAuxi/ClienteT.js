// Cliente UDP
/// Modulo dgram, para crear datagramas
var dgram = require('dgram');

// Creamos el buffer data donde estamos almacenando "Mensaje al servidor" 
//var data = new Buffer.from("Mensaje al servidor"); 
var client = dgram.createSocket("udp4");

// LEER EN LINEA 
const readline = require('readline');
const rl =  readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log('Bienvenido al sistema LAB 273')
console.log('Ingrese usuario y contraseña (user/pass)');
rl.on('line', (Mensaje_a_Servidor) =>{
     // Cuando escriba exit el programa terminara
    if(Mensaje_a_Servidor == 'exit'){
     rl.close();
     client.close();
    }else{
     client.send(Mensaje_a_Servidor, 0 , Mensaje_a_Servidor.length, 7000, 'localhost');
      
    }
    
 });
 
 //rl.on('line', (Mensaje_a_Servidor) =>{
 //   client.send(Mensaje_a_Servidor, 0 , Mensaje_a_Servidor.length, 8000, 'localhost');
 //   rl.close();
 //});
 
 // message, recibimos el mensaje del servidor
 client.on('message', function (msg){
     console.log('Mensaje del Servidor: '+msg.toString());
     console.log('Bienvenido al sistema LAB 273')
     console.log('Ingrese usuario y contraseña (user/pass)');
 });

client.on('close', function () {   
    console.log('Desconectado del Servidor');   
});
















