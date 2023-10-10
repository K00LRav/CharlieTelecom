import React from "react";
import { useState } from "react";
import "./Contact.css";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ptvy858', 'template_gcduhri', form.current, 'mIGfSiDSk9-tiYNtk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  //reset form, problem right now, it reset form and sends a blank message
   const resetForm = () => {
    document.getElementById("myForm").reset();
  }
    
  return (
    <div className="form-container">
    <form ref={form} className="contact-form" onSubmit={sendEmail} id="myForm">
      <h1>Contact <span>Here</span></h1>
      <label>Name:</label>
      <input type="text" name="user_name"/>
      <label>Email:</label>
      <input type="email" name="user_email"/>
      <label>Phone:</label>
      <input type="tel" name="user_phone" placeholder="123-456-7890" pattern="[0-9]{3}[0-9]{3}[0-9]{4}"/>
      <label>Message</label>
      <textarea name="message" cols="30" rows="10"  placeholder="Type here..."/>
      <button type="submit" value={"Send"}>Send</button>
    </form>
    </div>
  );
}

export default Contact;
