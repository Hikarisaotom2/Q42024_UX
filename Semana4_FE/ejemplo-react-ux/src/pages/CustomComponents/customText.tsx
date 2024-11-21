import React, { useState,useEffect } from "react";
import CustomH1 from "./customH1";
import { text } from "node:stream/consumers";
import axios from "axios";

interface CustomTextProps {
    titulo: string;
    descripcion: string;
}

// const CustomText =(param:CustomTextProps) =>{

const CustomText =({titulo,descripcion}:CustomTextProps) =>{
    const [textoIngresado,setTextoIngresado] = useState("");
    /*
    1) ejecutarse en cada render 
    2) ejecutarse solo una vez
    3) ejecutarse solo cuando una variable cambie
    */
//    1) primera forma: cada render
    // useEffect(()=>{
    //     console.log("se ejecuto un cambio");
    // });
// 2) segunda forma: solo una vez
    //useEffect(arrow,dependencias);
    useEffect(
        ()=>{
            
        },[]
    );


    const test = () =>{
        let url = 'http://localhost:3001/saludar';
        console.log("se ejecuto el render incicial");
        let resp = axios.get(url);
        console.log("Mi primera promise!");
        console.log(resp);
    }
 // 3) tercera forma: solo cuando una variable cambie
    // useEffect(
    //     ()=>{
    //         console.log("Se ejecuto un cambio en el state textoIngresado");
    //     },[textoIngresado]
    // );
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