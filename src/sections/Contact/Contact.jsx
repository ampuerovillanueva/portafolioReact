import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import styles from './ContactStyles.module.css';
import Modal from './Modal'; // Importa el componente Modal

const service = import.meta.env.VITE_SERVICEID;
const template = import.meta.env.VITE_TEMPLATE;
const token = import.meta.env.VITE_TOKEN;

function Contact() {
  const form = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializa AOS con una duración de animación de 1000ms
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(service, template, form.current, token)
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setModalTitle('Éxito');
          setModalMessage('Mensaje enviado exitosamente!');
          setModalVisible(true);
        },
        (error) => {
          console.log('FAILED...', error);
          setModalTitle('Error');
          setModalMessage(`No se pudo enviar el mensaje: ${error.text}`);
          setModalVisible(true);
        }
      );
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contacto</h1>
      <form ref={form} onSubmit={sendEmail} data-aos="fade-down">
        <div className={styles.formGroup} data-aos="fade-down">
          <label htmlFor="user_email" hidden>Email</label>
          <input type="email" name="user_email" id="user_email" placeholder="Correo Electrónico" required />
        </div>
        <div className={styles.formGroup} data-aos="fade-down">
          <label htmlFor="subject" hidden>Asunto</label>
          <input type="text" name="subject" id="subject" placeholder="Asunto" required />
        </div>
        <div className={styles.formGroup} data-aos="fade-down">
          <label htmlFor="message" hidden>Mensaje</label>
          <textarea name="message" id="message" placeholder="Mensaje" required></textarea>
        </div>
        <input className={`${styles.btn} hover`} type="submit" value="Enviar" data-aos="fade-down" />
      </form>
      
      {/* Modal */}
      <Modal 
        show={modalVisible} 
        onClose={closeModal} 
        title={modalTitle} 
        message={modalMessage} 
      />
    </section>
  );
}

export default Contact;
