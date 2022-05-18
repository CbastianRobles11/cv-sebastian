import React, { useEffect } from 'react'

import ReactTypingEffect from 'react-typing-effect';

export default function Principal() {

//  useEffect(() => {
//   var typed = new Typed('.element', { strings: ['en Desarrollo Web.', 'en Docencia.'],typeSpeed:100,
//   startDelay:2000,backSpeed:100 ,smartBackspace:false,shuffle:false,backDelay:2300,loop:true,
//   loopCount:false,showCursor:false,
//   cursorChar:'|',contentType:'null'
// });
//  },[])
 

 
  return (
    <div class="card mb-8" id='Principal' style={{backgroundColor:"black",color:"white"}} >
    <div class="row mb-2">
      <div class="col-md-7">
      <img src="http://drive.google.com/uc?export=view&id=1fVi15t4J5djAzygjWfvEhf4COK3xO-0F" class="card-img" height={'60%'} />
      </div>
      <div class="col-md-4">
        <div class="card-body">
        <h3 class="card-title" style={{color:'violet'}} >SEBASTIÁN ROBLES TORRES</h3>
          <h5 class="card-title text-center" >Bienvenido a mi mundo </h5>
          {/* <h5 class="card-title"><span style={{color:'violet'}} className='element'></span></h5> */}
          <h5>Experiencia  <span style={{color:'violet'}}><ReactTypingEffect eraseDelay={2500}
        text={['en Desarrollo Web.', 'en Docencia.','en Logística']}
      /></span> </h5>
          <p class="card-text"> <span className='negrilla' > Nacimiento :</span>  9 de Noviembre 1995</p>
          <p class="card-text"><span className='negrilla' > Edad :</span> 26</p>
          <p class="card-text"><span className='negrilla' > Mobil :</span> +593998239431</p>
          <p class="card-text"><span className='negrilla' > Correo : </span>cbas.secoli@gmail.com </p>
          <p class="card-text"><span className='negrilla' > Dirección : </span>F Robles y P Toa La Luz-Conocoto   Quito - Ecuador </p>
          <p class="card-text"><span className='negrilla' > Titulo Registro Senecyt : </span>2248-2021-2314303</p>
          <p class="card-text"><span className='negrilla' > GITHUB : </span>https://github.com/CbastianRobles11</p>
          
        </div>
      </div>
    </div>
  </div>
  )
}
