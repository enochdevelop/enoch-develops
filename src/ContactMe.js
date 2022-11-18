
import './App.css';
import './Contact.css'
import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import Popup from './Popup';
import { useState, useEffect } from 'react';

function Contact() {

  const form = useRef();
  const [timedPopup, setTimedPopup] = useState(false);

  function playPopup () {
    setTimedPopup(true);
    form.current?.reset();
    
    setTimeout(() => {
      setTimedPopup(false);
    }, 3000);

  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6tt254c', 'template_eoxdpqw', form.current, 'XxEXP5_yY8DgG-RV5')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="contact_container">
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}> 
            <h3 className='content_messsage'>message sent!</h3>
      </Popup>
      <div className='content_header'>
        <p className='content_header-text'>Something On Your Mind?</p>
      </div>
      <div className='email_content'>
        <div className="email_design_container">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className="name_text" placeholder="Name"/>     
            <input type="email" name="user_email" className="email_text" placeholder="Email" />      
            <textarea name="message" className="message_text" placeholder="Message"/>
            <input type="submit" value="Send"  onClick={() => playPopup()} className="submit_text"/>
          </form>
        </div>
      </div>
      <div className='icon_content'>
        <div className="icons">
          <a className="snapchat" href="https://lensstudio.snapchat.com/creator/d6TqmX7QKsLE-FU_u9UXwQ" target="_blank" rel="noopener noreferrer"> </a>
          <a className="linkedin" href="https://www.linkedin.com/in/enoch-ajagbe/" target="_blank" rel="noopener noreferrer"> </a>
          <a className="instagram" href="https://www.instagram.com/enoch.dev/" target="_blank" rel="noopener noreferrer"> </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;
