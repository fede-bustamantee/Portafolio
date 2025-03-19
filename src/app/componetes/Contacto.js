"use client";  // Esto asegura que el componente se ejecute en el cliente

import React from "react";
import "../styles/Contacto.css";
import personalData from "../data/personaldata";
import contacto from "../data/contacto";

const Contacto = () => {
  return (
    <div>
      <footer id="con">
        <p data-aos-delay="25" data-aos="zoom-in">Te puedo hacer una hermosa página web contactame...</p>
        <div className="redes">
          <div data-aos-delay="50" data-aos="zoom-in"><a href={contacto.github}><i className="fab fa-github"></i></a></div>
          <div data-aos-delay="100" data-aos="zoom-in"><a href={contacto.whatsapp}><i className="fab fa-whatsapp"></i></a></div>
          <div data-aos-delay="200" data-aos="zoom-in"><a href={contacto.gmail}><i className="fa-regular fa-envelope"></i></a></div>
        </div>
      </footer>

      <div className="contactame">
        <p data-aos="fade-up">{personalData.nombreApellido}</p>
        <a data-aos="fade-up" className="botton-two" href="#pagi">Volver</a>
      </div>
    </div>
  );
};

export default Contacto;