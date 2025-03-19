"use client";
import React, { useEffect, useState } from "react";
import "../styles/HomePage.css";
import "aos/dist/aos.css"; // Importa el archivo CSS de AOS
import AOS from "aos"; // Importa la librería de AOS
import personalData from "../data/personaldata";
import contacto from "../data/contacto";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Inicializa AOS cuando el componente se monte
    AOS.init({
      easing: 'ease-out', // Tipo de easing
      once: true, // Si la animación debe ejecutarse solo una vez
    });
  }, []); // El efecto se ejecuta solo una vez cuando el componente se monta

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="textizquierda" data-aos-delay="100" data-aos="zoom-in">
        <div className="lineavertical"></div>
        <a href={contacto.github}><i className="fab fa-github"></i></a>
        <a href={contacto.whatsapp}><i className="fab fa-whatsapp"></i></a>
        <a href={contacto.gmail}><i className="fa-regular fa-envelope"></i></a>
      </div>

      <div className="textderecha" data-aos-delay="100" data-aos="zoom-in">
        <div className="linea-vertical"></div>
        <p>fede</p>
      </div>

      <div className="secc" id="pagi">
        <nav>
          <a href="/" className="logo">
            <img src="/img/firme.png" alt="Logo" className="logo-img" data-aos="zoom-in" data-aos-duration="1000"/>
          </a>

          <div className="menu-icon" onClick={toggleMenu}>
            <i className="fa-solid fa-bars"></i>
          </div>

          <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
            <li data-aos-delay="200" data-aos="zoom-in"><a href="#mi" onClick={toggleMenu}>01. Acerca de mi</a></li>
            <li data-aos-delay="300" data-aos="zoom-in"><a href="#habi" onClick={toggleMenu}>02. Habilidades</a></li>
            <li data-aos-delay="400" data-aos="zoom-in"><a href="#apps" onClick={toggleMenu}>03. Aplicaciones</a></li>
            <li data-aos-delay="500" data-aos="zoom-in"><a href="#con" onClick={toggleMenu}>04. Contactame</a></li>
          </ul>

          <div className="contenido">
            <h4 data-aos="zoom-in" data-aos-delay="700">Bienvenidos a mi sitio web, me llamo</h4>
            <h1 data-aos="zoom-in" data-aos-delay="800">{personalData.nombreApellido},</h1>
            <h3 data-aos="zoom-in" data-aos-delay="900">{personalData.myDescription}</h3>
            <br />

            <div data-aos="flip-down" data-aos-delay="1000" data-aos-duration="500">
              <a href="#mi"><button type="button">Continuar</button></a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Home;