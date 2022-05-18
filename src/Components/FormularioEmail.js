import React, { useState, useRef ,useEffect } from 'react'
import emailjs from 'emailjs-com'
import { render } from 'react-dom';
import ReactWhatsapp from 'react-whatsapp'
import { useForm } from "react-hook-form";

export default function FormularioEmail() {

   
    const eliminarMensaje=()=>{
        setTimeout(() => {
            resetField("user_name");
            resetField("user_email")
            resetField("user_message")
        }, 600000);
    }
    
    const [mensaje, setmensaje] = useState({
        mensaje: "",
        clase: ""
    })
    const [visible, setvisible] = useState(false)

    const { register, formState: { errors }, handleSubmit, resetField } = useForm();
    const form = useRef();

    const enviarEmail = (formData) => {

        console.log(formData.tarjet);

        

        emailjs.sendForm('service_djp7dlb', 'template_tleengh', form.current, 'Hq5igIe8oe_seTgyg').then(res => {
           
            setmensaje({ mensaje: "Su correo fue enviado con exito", clase: "alert alert-success" })
            setvisible(true)
            
            setTimeout(() => {
                setmensaje({ mensaje: "", clase: "" })
                setvisible(false)
                
            }, 4000);


        }).catch(error => {
            console.log(error);
            setmensaje({ mensaje: "Ups! Su correo no pudo ser enviado", clase: "alert alert-danger" })
            setvisible(true)
            setTimeout(() => {
                setmensaje({ mensaje: "", clase: "" })
                setvisible(false)
            }, 4000);


        })

    }

    return (

        <div style={{ color: "white" }} >
            <h2 className='text-center' id='Contactame' style={{ fontWeigth: 'bold',color:'white' }}>CONTÁCTAME</h2>
            <div className="mt-4">
            
            <h4 className='text-left' id='Contactame' style={{ fontWeigth: 'bold' }}>Por Correo</h4>
            </div>

            {
                visible &&
                <div class={mensaje.clase} role="alert">
                    {mensaje.mensaje}
                </div>
            }
            <form ref={form} onSubmit={handleSubmit(enviarEmail)}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Su Nombre</label>
                    <input type="text" class="form-control"  placeholder="Ingrese su nombre" {...register("user_name", { required: true ,pattern:/[a-zA-Z ]{3,254}/g})} />
                        {errors.user_name?.type==="required" && <p style={{color:'violet'}}> ! Su nombre es requerido </p>}
                        {errors.user_name?.type==="pattern" && <p style={{color:'violet'}}> ! Su nombre debe tener al menos 3 letras y no numeros </p>}
                    {/* <input type="text" class="form-control" name='user_name' placeholder="Ingrese su nombre" /> */}
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Su Email</label>
                    <input type="email" class="form-control"  placeholder="nombre@ejemplo.com" {...register("user_email", { required: true , pattern:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g})} />
                        {errors.user_email?.type==="required" && <p style={{color:'violet'}}> ! Su email es requerido </p>}
                        {errors.user_email?.type==="pattern" && <p style={{color:'violet'}}> ! El formato de email es incorecto </p>}
                    {/* <input type="email" class="form-control" name='user_email' placeholder="nombre@ejemplo.com" /> */}
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Su Mensaje</label>
                    <textarea type="email" class="form-control"  placeholder="Ingrese su mensaje aquí" {...register("user_message", { required: true, minLength:10 })} >
                    </textarea>
                        {errors.user_message?.type==="required" && <p style={{color:'violet'}}>! Su mensaje es requerido </p>}
                        {errors.user_message?.type==="minLength" && <p style={{color:'violet'}}> ! Su mensaje debe tener al menos 10 caracteres </p>}
                    {/* <textarea class="form-control" name='user_message' id="exampleFormControlTextarea1" rows="3"></textarea> */}
                </div>
                <div class="mb-3">
                    <input type="submit" onClick={eliminarMensaje} class="btn btn-success" title='Enviar' />
                </div>

            </form>

            <div className="mt-4">
            <h4 className='text-left ' id='Contactame' style={{ fontWeigth: 'bold' }}>Por WhatsApp</h4>
            </div>
            <div class="mb-3">
                <div class="d-grid gap-2">
                    <ReactWhatsapp className="btn btn-success" number="+593998239431" message="Hola Sebastian, estuve viendo tu curriculum, y te estoy contactando mi nombre es " style={{ borderWidth: "inherit" }}> DESDE AQUÍ <button class="btn btn-success " title='  ' >+593998239431</button></ReactWhatsapp>
                </div>
            </div>
            <hr style={{ background: "violet", height: "5px" }} />
        </div>
    )
}
