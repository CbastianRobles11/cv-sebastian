import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
    return (
        <BrowserRouter>
            

            <nav class="navbar navbar-expand-lg bg-dark"  >
                <div class="container-fluid" style={{color:'white'}}>
                <a target="_blank" href="https://drive.google.com/file/d/1ccfQntvC2iWg7x44tBwVDe3u48_UMFuT/view?usp=sharing"  className="nav-link"  style={{textDecoration:'none', color:'violet', fontWeight:'bold'}} >Tnlgo Sebastian Robles</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup" style={{ background: 'black', color: 'white' }}>
                        <div class="navbar-nav">
                            
                            <HashLink to='#Pricipal' style={{textDecoration:'none', color:'white', fontWeight:'bold'}}  className="nav-link" smooth >Principal</HashLink>
                            
                            <HashLink to='#Experiencia' style={{textDecoration:'none', color:'white', fontWeight:'bold'}}  className="nav-link" smooth >Experiencia</HashLink>
                            <HashLink to='#Contenido' style={{textDecoration:'none', color:'white', fontWeight:'bold'}} className="nav-link" smooth >Contenido</HashLink>
                            <HashLink to='#Contactame' style={{textDecoration:'none', color:'white', fontWeight:'bold'}}  className="nav-link" smooth >Contactame</HashLink>
                        </div>
                    </div>
                </div>
            </nav>
        </BrowserRouter>
    )
}
