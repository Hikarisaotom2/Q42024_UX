const express = require('express');

//Crear instancia de express 
const app = express();

// definir el puerto en el que queremos que se ejecute. 
const port = 3000;

//Iniciar el servidor. 
// 1er parametro: puerto en el que queremos que se ejecute.
// 2do parametro: callback que se ejecutará cuando el servidor se inicie. 

app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
})


/*
1) El BE tiene control absoluto. 
    1.1 como responder 
    1.2 a quien responder 
    1.3 que responder
    1.4 como gestionar los errores o la informacion que nos den. 
*/

// definir una ruta 

/*
    Terminos importantes: 
    - Ruta/endpoint: es la direccion a la que se accede.
    - Payload: es la informacion que se envia al servidor.
    - Endpoint: es la combinacion de la ruta y el metodo HTTP.
*/

app.get('/saludar',(req,res)=>{
    console.log('Se recibio una solicitid de saludar');
    console.log("Payload: ", req);
    /*
    accediendo a la bdd
    modificando registros 
    algoritmo de verificacion de datos......
    */
   res.status(200).send({
     mensaje: "Su solicitud fue procesada correctamente",
        data: {
            nombre: "Jorge",
            edad: 25
        }
   });
});


