import React, { useState } from "react";
import CustomH1 from "./customH1";
import { text } from "node:stream/consumers";

interface CustomTextProps {
    titulo: string;
    descripcion: string;
}

// const CustomText =(param:CustomTextProps) =>{

const CustomText =({titulo,descripcion}:CustomTextProps) =>{
    const [textoIngresado,setTextoIngresado] = useState("");
    const condicional= ()=>{
            if(textoIngresado.length>5){

                return <p> tamaño superior a 5!</p>
            }else{
                return <p>el texto es muy corto</p>
            }
    }

    const condiconal2 = ()=>{
        if(textoIngresado.length%2 == 0){
            return <p>la longitud es par</p>
        }
    }

    return (
        <div>
            <></>
            <CustomH1 titulo = {textoIngresado} />
            <p>{descripcion}</p>
        {
            // // operador ternario 
            // // condicicon ? verdadero : falso == if else 
            textoIngresado.length>5 ?
            <p> tamaño superior a 5!</p> 
            : <p>el texto es muy corto</p>
            // condicional()
        }

        {
            //  condicion&& contenido
            textoIngresado.length%2 == 0 && <p>la longitud es par</p>
            // condiconal2()
        }
            <input type="text" placeholder="Nombre" onChange={(evt:React.ChangeEvent<HTMLInputElement>)=>{console.log(evt.target.value); setTextoIngresado(evt.target.value)}} />
        </div>
    );
}


export default CustomText;