import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import CustomText from "./CustomComponents/customText";
import CustomH1 from "./CustomComponents/customH1";

export default function Home() {
  const getText= () => {
    return "Hola mundo"
  }

  const getComponente = ()=> {
    return <h2>{getText()}</h2>
  }

  return(
    <>
    {/* {
      getComponente() 
    } */}
    {/* <CustomText/>
  <h1>{getText()}</h1> */}
  {/* <h1>{"Texto estatico"}</h1> */}

  < CustomText titulo="Hola mundo!" descripcion="juan perez"/>
  <br/><br/>
  < CustomText titulo="Viajando por japon" descripcion="perez juan"/>
  <br/><br/>
  < CustomText titulo="Visitando TGU" descripcion="Claudia cortes"/>
    </>
  )
}
