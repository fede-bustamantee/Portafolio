"use client";  // Esto asegura que el componente se ejecute en el cliente

import React from "react";
import "../styles/Contacto.css";

const Contacto = () => {
  return (
    <div>
      <footer id="con">
        <p data-aos-delay="25" data-aos="zoom-in">Te puedo hacer una hermosa página web...</p>
        <div className="redes">
          <div data-aos-delay="50" data-aos="zoom-in"><a href="https://web.whatsapp.com/send?phone=3498409675&text=Hola necesito un Sitio Web."><i className="fab fa-whatsapp"></i></a></div>
          <div data-aos-delay="100" data-aos="zoom-in"><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></div>
          <div data-aos-delay="200" data-aos="zoom-in"><a href="https://es-la.facebook.com/"><i className="fab fa-facebook-f"></i></a></div>
          <div data-aos-delay="300" data-aos="zoom-in"><a href="https://twitter.com/?lang=es"><i className="fab fa-twitter"></i></a></div>
          <div data-aos-delay="400" data-aos="zoom-in"><a href="https://www.twitch.tv/"><i className="fab fa-twitch"></i></a></div>
          <div data-aos-delay="500" data-aos="zoom-in"><a href="https://www.google.com/intl/es-419/gmail/about/"><i className="fa fa-at"></i></a></div>
          <div data-aos-delay="600" data-aos="zoom-in"><a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a></div>
          <div data-aos-delay="700" data-aos="zoom-in"><a href="https://github.com/github"><i className="fab fa-github"></i></a></div>
        </div>
      </footer>

      <div className="contactame">
        <p>Federico Bustamante</p>
        <a className="botton-two" href="#pagi">Volver</a>
      </div>
    </div>
  );
};

export default Contacto;