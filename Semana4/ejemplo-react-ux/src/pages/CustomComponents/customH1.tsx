import React from "react";

interface CustomH1Props {
titulo:string;
}
const CustomH1 =(parametros:CustomH1Props) =>{
    return (
        <div>
            <h1>{parametros.titulo}</h1>
        </div>
    );
}

export default CustomH1;