import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import CustomText from "./CustomComponents/customText";
import CustomH1 from "./CustomComponents/customH1";
import { useState } from "react";

interface Video {
 id: number;
 titulo: string;
 descripcion: string;
 img?:string; //parametro es opcional
}

export default function Home() {
  const [videos,setVideos] = useState<Video[]>([
    {
      id:1, 
      titulo: "Comidas deliciosas",
      descripcion: "Luisito comunica",
    },
    {
      id:2, 
      titulo: "Aprende react en 5 minutos",
      descripcion: "Codigo facilito",
    },
    {
      id:3, 
      titulo: "Programacion Mobile",
      descripcion: "Claudia Cortes",
    },
    {
      id:4, 
      titulo: "teoria de base de datos",
      descripcion: "Claudia Cortes",
    },
    {
      id:5, 
      titulo: "Estructuras de datos",
      descripcion: "Claudia Cortes",
    }
  ]);
  const getText= () => {
    return "Hola mundo"
  }

  const getComponente = ()=> {
    return <h2>{getText()}</h2>
  }

  return(
    <>
  {/* < CustomText titulo="Hola mundo!" descripcion="juan perez"/>
  <br/><br/>
  < CustomText titulo="Viajando por japon" descripcion="perez juan"/>
  <br/><br/>
  < CustomText titulo="Visitando TGU" descripcion="Claudia cortes"/>
  */}
 {/*
     casteo: conversion de datos de un tipo a otro
     parseo: tokenizar un string para convertirlo en un objeto
     mapeo: recorrer un arreglo y devolver un nuevo arreglo con los elementos modificados
     map != casteo 
 */}

{
   // foreachIndexed 
   videos.map( (video) => <> <br/> <br/><CustomText titulo={video.titulo} descripcion={video.descripcion}/></> )
 }
    </>
  )
}
