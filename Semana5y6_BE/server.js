const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

let parser = bodyParser.urlencoded({extended: true});

//Crear instancia de express 
const app = express();
app.use(parser);
// definir el puerto en el que queremos que se ejecute. 
const port = 3001;

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

app.post('/getInfoSeccion/:identidad/:nombre/:correo',(req,res)=>{
    console.log("la identidad es: ", req.params.identidad);
    res.status(200).send({
        mensaje: "usando params!"
    });
})

app.post('/crearUsuario',(req,res)=>{
    console.log("Nombre: ", req.body.nombre);
    console.log("Apellido: ", req.body.apellido);
    console.log("Contrasena: ", req.body.contrasena);
    console.log("Correo: ", req.body.correo);
    res.status(400).send({
        mensaje: "Datos recibidos!"
    });
})

app.get('/saludar',(req,res)=>{
    console.log('Se recibio una solicitid de saludar');
    // console.log("Payload: ", req);
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

app.post('/saludar',(req,res)=>{
    console.log('Se recibio una solicitid de POST');
    /*
    insert en BDD
    */
    res.status(500).send(
        "hola Mundo"
    );
    }
);

app.put('/actualizarDatos',(req,res)=>{
 console.log("Se recibio una solicitud de actualizar datos");

 res.status(203).send({
    mensaje: "Su solicitud fue procesada correctamente",
 });

});

app.delete('/eliminarDatos',(req,res)=>{
    console.log("Se recibio una solicitud de eliminar datos");
    res.status(203).send({
        mensaje: "Su solicitud fue procesada correctamente",
    });
});

app.get('/getHome', (req,res)=>{
 let archivo = path.join(__dirname,'home.html')
 console.log(archivo);
 res.status(200).sendFile(archivo);
 /*
    __dirname, no fue definida por nosostros
 */
}
);

