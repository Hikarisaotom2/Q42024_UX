const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const { strict } = require('assert');
const {initializeApp} = require('firebase/app');
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } = require ("firebase/auth");




let parser = bodyParser.urlencoded({extended: true});
//Crear instancia de express 
const app = express();
app.use(parser);
// definir el puerto en el que queremos que se ejecute. 
const port = 3001;
let uri = "mongodb+srv://usuario:Password123@ux2024.m1ih6.mongodb.net/?retryWrites=true&w=majority&appName=ux2024"
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true
    }
});

// const firebaseConfig = {
//     apiKey: "AIzaSyCMJaO2Msj9LN3qySpXSFF9ck8tvZmhxX8",
//     authDomain: "ux2024-q4.firebaseapp.com",
//     projectId: "ux2024-q4",
//     storageBucket: "ux2024-q4.firebasestorage.app",
//     messagingSenderId: "335262097779",
//     appId: "1:335262097779:web:73549534baac82e0196506",
//     measurementId: "G-MWVKP7WV42"
//   };

const firebaseConfig = {
    apiKey: "AIzaSyBaejQ2O8MRgMtsQFFVqkMwiTx7e2_KkXA",
    authDomain: "ux2024-6cba2.firebaseapp.com",
    projectId: "ux2024-6cba2",
    storageBucket: "ux2024-6cba2.appspot.com",
    messagingSenderId: "342081729560",
    appId: "1:342081729560:web:c891f7902249a31dd0bf6d",
    measurementId: "G-5NG5C4NQFH"
  };

const firebase = initializeApp(firebaseConfig);

//Iniciar el servidor. 
// 1er parametro: puerto en el que queremos que se ejecute.
// 2do parametro: callback que se ejecutará cuando el servidor se inicie. 

async function connect(){
 try{
    await client.connect();
    console.log("Conectado a la base de datos");
 }catch(error){
    console.error("Error al conectar a la base de datos: ", error);
 }
}

app.listen(port, ()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
    connect();
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


/*Endpoints de mongo*/

app.post('/crearUsuarioMongo', async (req,res)=>{ 
    try{

        const client = new MongoClient(uri);
        // conectarse a la DB 
        const baseDeDatos = client.db("claseux");
        // seleccionar la coleccion con la que queremos trabajar
        const coleccion = baseDeDatos.collection("alumnosUX");
        // crear un nuevo registro
        const response = await coleccion.insertOne(
            {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                correo: req.body.correo,
                contrasena: req.body.contrasena,
                ...req.body
            });
        res.status(200).send({
            resultado: response,
        });

    }catch(error){
        res.status(401).send({
        error: error,
        });
    }
});

//update 
app.put('/actualizarUsuarioMongo', async (req,res)=>
    {
    try{
        const client = new MongoClient(uri);
        const baseDeDatos = client.db("claseux");
        const coleccion = baseDeDatos.collection("alumnosUX");
        // update el document 
        const response = await coleccion.updateOne(
            {
                // where correo = req.body.correo
                //filtros  
                correo: req.body.correo,
            },
            {
                $set: {
                    // definir que campos queremos actualizar
                    grupoTrabajo: req.body.grupoTrabajo,
                    nuevoCampo: "este campo no existia antes"
                }
            }
        );

        res.status(200).send({
            resultado: response,
            mensaje:'Se actualizo el documento',
        });
    }catch(error){
        res.status(401).send({
            error: error,
        });
    }
});

//delete 
app.delete('/eliminarUsuarioMongo', async (req,res)=>{
    try{
        const client = new MongoClient(uri);
        const baseDeDatos = client.db("claseux");
        const coleccion = baseDeDatos.collection("alumnosUX");

        const response = await coleccion.deleteOne(
            {
                _id: new ObjectId(req.body._id),
            }
        );
        if(response.deletedCount === 0){
            res.status(300).send({
                mensaje: "No se encontro ningun documento con ese ID",
            });
        }else{
            res.status(200).send({
                resultado: response,
                mensaje: "Se elimino el documento",
            });
        }

       

    }catch(error){
        console.log(error);
        res.status(401).send({
            error: error,
        });
    }

});
//get  

app.get('/obtenerUsuario',async (req,res)=>{    
        const client = new MongoClient(uri);
        const baseDeDatos = client.db("claseux");
        const coleccion = baseDeDatos.collection("alumnosUX");
        try{
            // obtener todos los documentos de la coleccion     
                                            // select from * 
        const response = await coleccion.find({}).toArray();
        
        res.status(200).send({
            resultado: response,
        });
        }catch(error){
            res.status(401).send({
                error: error,
            });
        }
});


// Firebase 


app.post('/crearUsuarioFirebase', async (req,res)=>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, req.body.correo, req.body.contrasena)
    .then((response) => {
        // Signed in
        res.status(200).send({
            resultado: response,
        });
    })
    .catch((error) => {
        res.status(401).send({
            error: error,
        });
    });
});

app.post('/loginFirebase', async (req,res)=>{
    console.log("Correo: ", req.body.correo);
    const auth = getAuth(firebase);
    signInWithEmailAndPassword(auth,req.body.correo, req.body.contrasena).
    then((response)=>{
        res.status(200).send({
            resultado: response,
        });
    }).catch((error)=>{
        res.status(401).send({
            error: error,
        });
    });

});

app.post('/logoutFirebase', async (req,res)=>{
    const auth = getAuth(firebase);
    signOut(auth).then((response)=>{
        res.status(200).send({
            mensaje: "Sesion cerrada",
            resultado: response,
        });
    }).catch((error)=>{
        res.status(401).send({
            error: error,
        });
    })

});
