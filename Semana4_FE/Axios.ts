 import axios from 'axios';

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