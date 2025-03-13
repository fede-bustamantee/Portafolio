"use client"; 
import React, { useEffect } from "react";
import "../styles/HomePage.css";
import "aos/dist/aos.css"; // Importa el archivo CSS de AOS
import AOS from "aos"; // Importa la librería de AOS
import personalData from "../data/personaldata";
import contacto from "../data/contacto";

const Home = () => {
  useEffect(() => {
    // Inicializa AOS cuando el componente se monte
    AOS.init({
      easing: 'ease-out', // Tipo de easing
      once: true, // Si la animación debe ejecutarse solo una vez
    });
  }, []); // El efecto se ejecuta solo una vez cuando el componente se monta

  return (
    <div>
      <div className="textizquierda" data-aos-delay="100" data-aos="zoom-in">
        <a href={contacto.github}><i className="fab fa-github"></i></a>
        <a href=""><i className="fab fa-whatsapp"></i></a>
        <a href=""><i className="fab fa-instagram"></i></a>
        <a href=""><i className="fab fa-facebook"></i></a>
        <a href=""><i className="fab fa-twitter"></i></a>
      </div>

      <div className="textderecha" data-aos-delay="100" data-aos="zoom-in">
        <p>fedemacano</p>
      </div>

      <div className="secc" id="pagi">
        <nav>
          <a href="index.html">
            <h2 className="logo">
              <span data-aos="zoom-in" data-aos-duration="1000">ma</span>
              <samp data-aos="zoom-in" data-aos-duration="1000">cano</samp>
            </h2>
          </a>

          <ul>
            <li data-aos-delay="200" data-aos="zoom-in"><a href="#mi">01. Acerca de mi</a></li>
            <li data-aos-delay="300" data-aos="zoom-in"><a href="#habi">02. Habilidades</a></li>
            <li data-aos-delay="400" data-aos="zoom-in"><a href="#ser">03. Servicios</a></li>
            <li data-aos-delay="500" data-aos="zoom-in"><a href="#con">04. Contactame</a></li>
          </ul>

          <a href="iniciarseccion.html">
            <p className="subs" data-aos="zoom-in" data-aos-delay="600">Inscribirse</p>
          </a>

          <div className="contenido">
            <h4 data-aos="zoom-in" data-aos-delay="700">Bienvenidos a mi sitio web, me llamo</h4>
            <h1 data-aos="zoom-in" data-aos-delay="800">{personalData.nombreApellido},</h1>
            <h3 data-aos="zoom-in" data-aos-delay="900">{personalData.myDescription},</h3>
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