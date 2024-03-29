import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form= useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kq5wczw', 'template_m0oitjj', form.current, 'z9ll48cau6pCH0DXA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>souless496@gmail.com</h5>
            <a href='mailto:test@gmail.com'>Send an email</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Number</h5>
            <a href='https://api.whatsapp.com/send?phone=523335840373' target="_blank">Send a whatsapp</a>
          </article>

        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required></input>
          <input type="email" name='email' placeholder='Your Email' required></input>
          <textarea name='Message' rows="7" placeholder="Your message" required>

          </textarea>
        <button type='submit' className='btn btn-primary'>Send message</button>

        </form>
      </div>
    </section>


  )
}

export default Contact