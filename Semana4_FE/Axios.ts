 import axios from 'axios';
/*
     async / await  -> estructura de la funcion 
     then / catch -> estructura de la promesa
    */
 const Test = async () => {
    let url = 'http://localhost:3001/saludar';
    let resp = await axios.get(url);
    /*
     async / await  -> estructura de la funcion 
     then / catch -> estructura de la promesa
    */

    console.log('Mi primera promise!');
    console.log(resp.data);
  };

  const Test = () =>{
    let url = 'http://localhost:3001/saludar';
    axios.get(url).then((resp) => { 
      console.log('mi primera promise con then!');
      console.log(resp.data);
    }).catch((error) => {
      console.log('mi primera promise con catch!');
      console.log(error);
    });
  };

  const Test = async () => {
    let url = 'http://localhost:3001/crearUsuario';

    const body = {
      nombre: 'claudia',
      apellido: 'Cortés',
      contrasena: '123456',
      correo: 'clau_cortes@unitec.edu',
    };

    const configuracion = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    try {
      let resp = await axios.post(url, body, configuracion);
      console.log('Mi primera promise!');
      console.log(resp.data);
    } catch (error) {
      console.log('Error en la peticion', error);
    }
  }
    