import React from "react";
import { useState } from "react";
import "./Contact.css";

function Contact() {

    const [data, setData] = useState({name:"", email:"", phone:"", message:""})
    const handleChange = (e) =>{
          const name = e.target.name;
          const value = e.target.value;
          setData({...data, [name]: value})
          console.log(data)

    }
    
    const handleSubmit= (e) =>{
          e.preventDefault()
          e.target.reset()
          alert(data)
    }
    


  return (
    <div className="form-container">
    <form className="contact-form" method="post" onSubmit={handleSubmit}>
      <h1>Contact <span>Here</span></h1>
      <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder="Enter Name"/>
      <input type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder="example@gmail.com"/>
      <input type="phone" name="phone" id="" onChange={handleChange} value={data.phone} placeholder="Phone Number"/>
      <textarea name="message" id="" cols="30" rows="10" onChange={handleChange} value={data.message} placeholder="Type here..."/>
      <button type="submit" onChange={handleSubmit}>Send</button>
    </form>
    </div>
  );
}

export default Contact;
