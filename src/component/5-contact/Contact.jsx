import React, { useRef, useState } from 'react'
import "./ContactStyle.scss"
import emailjs from '@emailjs/browser'
export default function Contact() {
    
    const form = useRef();
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)

    const Success = ()=>{
      return(
      <div>
        <p className='zzz' style={{color:"white", fontSize:15, margin:10}}>THANK YOU ...</p>
      </div>
      )
    }
    const Errorz = ()=>{
      return(
      <div>
        <p className='zzz' style={{color:"white", fontSize:15, margin:10}}>Sorry there's an error</p>
      </div>
      )
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_90hbt0h', 'template_5l6imjq', form.current, '1L3KZlUm8te1Cqf68')
          .then((result) => {
            setSuccess(true)
            
              console.log(result.text);
          }, (error) => {
            setError(true)
              console.log(error.text);
          });
      };

      

  return (
    <div className='contact section__padding'>

        <div className="textContainer">
            <h1>Let's work together</h1>
        </div>

        <div className="formContainer">
            <form ref={form} onSubmit={sendEmail} action="">
            <input type="text" required placeholder='Name' name='name'/>
            <input type="text" required placeholder='Email' name='email'/>
            <textarea name="message" id="" cols="30" rows="10" placeholder='Message' ></textarea>
            <button >Submit</button>
            {error && <Errorz/>}
            {success && <Success/>}
            </form>
        </div>
            
    </div>
  )
}
