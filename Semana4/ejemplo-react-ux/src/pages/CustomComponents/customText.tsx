import React, { useState } from "react";
import CustomH1 from "./customH1";

interface CustomTextProps {
    titulo: string;
    descripcion: string;
}

// const CustomText =(param:CustomTextProps) =>{
const CustomText =({titulo,descripcion}:CustomTextProps) =>{
    const [textoIngresado,setTextoIngresado] = useState("adiosMundo");
    return (
        <div>
            <CustomH1 titulo = {titulo} />
            <p>{descripcion}</p>
            <p>{textoIngresado}</p>
            <input type="text" placeholder="Nombre"  />
        </div>
    );
}


export default CustomText;