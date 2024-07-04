import React from 'react'
import './Contant.css'

const ContactForm = () => {
  return (
    <div><div class="container">
    <form id="contact" action="" method="post">
      <h3> Contact Form </h3>
      <h4> Submit feedback or request </h4>
      <fieldset>
        <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
      </fieldset>
      <fieldset>
        <input placeholder="Email Address" type="email" tabindex="2" required/>
      </fieldset>
      
      <fieldset>
        <textarea placeholder="Your Message Here...." tabindex="4" required/> 
      </fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending"> Submit</button>
    </form>
  
  </div></div>
  )
}

export default ContactForm