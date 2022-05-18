import React from 'react'
import '../App.css';

import Principal from '../Components/Principal';
import Navbar from '../Components/Navbar';
import Contenido from '../Components/Contenido';
import Footer from '../Components/Footer';
import FormularioEmail from '../Components/FormularioEmail';
import CvComun from '../Components/CvComun';

export default function Page() {
  return (
    <div style={{ backgroundColor: "black" }} >
    
    <Principal />
    
      <div className='container'>
        <CvComun/>
        <Contenido />
        <FormularioEmail/>

      </div>
   
    <Footer/>


  </div>
  )
}
