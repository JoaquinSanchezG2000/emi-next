import Head from 'next/head'
import Navegation from './Componentes/Navegation'
import Carrusel2 from './Componentes/Carrusel2'
import Features from "./Componentes/Features"
import Footer from './Componentes/Footer'



export default function Home() {
  return (
    <div >
      <Navegation />
      <Carrusel2/>
      <Features />
      <Footer/>

      

    </div>
  )
}
