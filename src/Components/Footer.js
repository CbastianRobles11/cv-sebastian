import React from 'react'
import { render } from 'react-dom';
import ReactWhatsapp from 'react-whatsapp';

export default function Footer() {
  return (
    <div className='mt-4' style={{ borderWidth:'4px', borderColor:'violet'}}>
	<section id="footer" className='pt-2' style={{backgroundColor:"black", borderWidth:'2px', borderColor:'violet'}}>
		<div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5 style={{color:'violet'}}>Links Personales</h5>
					<ul class="list-unstyled quick-links" style={{color:'violet'}}>
						<li>Mi Curriculum</li>
						<li><a target="_blank" style={{textDecoration:'none', color:'violet'}}  href="https://drive.google.com/file/d/1ccfQntvC2iWg7x44tBwVDe3u48_UMFuT/view?usp=sharing"><i class="fa fa-angle-double-right"></i>Descarga aquí curriculum</a></li>
						<li><a  href="#"></a></li>
						<li>Mi Título </li>
						<li><a target="_blank" style={{textDecoration:'none', color:'violet'}}  href="https://drive.google.com/file/d/1k3keZ-SjF_2tHwU27zGak8Ies30pOMa1/view?usp=sharing">Descarga Certificado de Título de Senecyt</a></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
				
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5 style={{color:'violet'}}>Contáctame</h5>
					<ul class="list-unstyled quick-links" style={{color:'violet'}}>
						<li>Contactame al WhatsApp. </li>
						<li><a ><ReactWhatsapp number="+593998239431" message="Hola Andrés, estuve viendo tu curriculum, y te estoy contactando mi nombre es " style={{borderWidth: "inherit", background:"violet"}}>+593998239431</ReactWhatsapp> </a></li>
                        
						<li><a href="#"></a></li>
						<li>correo Electrónico</li>
						<li style={{textDecoration:'none', color:'violet'}} title="Design and developed by">cbas.secoli@gmail.com</li>
					</ul>
				</div>
			</div>
		
			<div class="row">
            <hr/>
				<div class="col-xs-12 col-sm-12 col-md-12 text-center text-white">
					<p>Sebastian Robles perteneciente a S. Robles  Quito-Ecuador</p>
					<p class="h6">© Todos los derechos recervados .</p>
				</div>
				<hr/>
			</div>	
		</div>
	</section>
	</div>
  )
}
