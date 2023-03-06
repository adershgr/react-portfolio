import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com'
import { BsLinkedin } from 'react-icons/bs';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs.sendForm('service_82ggx9l', 'template_11q7vim', form.current, 'b5ZZYjTI1l0Y49gyX')

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
    
      <h2>Contact Me</h2>
   
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided
      </h5>
      <br/>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Adersh G R</h5>
            <a href="https://www.linkedin.com/in/adersh-gr-506a1b1a6/" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name='message' rows="7" placeholder='your message' required ></textarea>
          <button type="submit" className='btn btn-primary'>Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
