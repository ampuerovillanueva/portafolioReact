import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactStyles.module.css';

const service = import.meta.env.VITE_SERVICEID;
const template = import.meta.env.VITE_TEMPLATE;
const token = import.meta.env.VITE_TOKEN;

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service, template, form.current, token)
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Mensaje enviado exitosamente!');
        },
        (error) => {
          console.log('FAILED...', error);
          alert(`No se pudo enviar el mensaje: ${error.text}`);
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contacto</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.formGroup}>
          <label htmlFor="user_email" hidden>Email</label>
          <input type="email" name="user_email" id="user_email" placeholder="Correo Electrónico" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject" hidden>Asunto</label>
          <input type="text" name="subject" id="subject" placeholder="Asunto" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" hidden>Mensaje</label>
          <textarea name="message" id="message" placeholder="Mensaje" required></textarea>
        </div>
        <input className={`${styles.btn} hover`} type="submit" value="Enviar" />
      </form>
    </section>
  );
}

export default Contact;
