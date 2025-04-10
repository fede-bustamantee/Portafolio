"use client";
import React, { useEffect, useState } from "react";
import "../styles/HomePage.css";
import "aos/dist/aos.css";
import AOS from "aos";
import personalData from "../data/personaldata";
import contacto from "../data/contacto";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    AOS.init({
      easing: "ease-out",
      once: true,
    });
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Función para determinar qué sección está activa según la posición de scroll
  const handleScroll = () => {
    const sections = ['inicio', 'mi', 'habi', 'apps', 'con'];

    // Si estamos en la parte superior, estamos en la página de inicio
    if (window.scrollY < 100) {
      setActiveSection('inicio');
      return;
    }
    for (const id of sections) {
      if (id === 'inicio') continue;
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(id);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest(".nav-menu") && !e.target.closest(".menu-icon")) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setActiveSection('inicio');
    if (menuOpen) toggleMenu();
  };

  return (
    <div className="home-container">
      <header className="header" data-aos="zoom-in" data-aos-duration="500">
        <a href="/" className="logo">
          <img
            src="/img/firme.png"
            alt="Logo"
            className="logo-img"
            data-aos="zoom-in"
            data-aos-duration="1000"
          />
        </a>
        <div className="menu-icon" onClick={toggleMenu} data-aos="zoom-in" data-aos-duration="1000">
          <i className={menuOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
        </div>

        <div className="start" data-aos="zoom-in" data-aos-duration="500">
          <h1>{personalData.nombre} {personalData.apellido}</h1>
          <h2>{personalData.profesion}</h2>
        </div>

        <nav className={menuOpen ? "main-nav active" : "main-nav"}>
          <ul className="nav-menu">
            <li data-aos="zoom-in" data-aos-delay="100">
              <a
                href="#"
                onClick={scrollToTop}
                className={activeSection === 'inicio' ? 'nav-active' : ''}
              >
                Inicio
              </a>
            </li>
            <li data-aos="zoom-in" data-aos-delay="200">
              <a
                href="#mi"
                onClick={toggleMenu}
                className={activeSection === 'mi' ? 'nav-active' : ''}
              >
                Acerca de mi
              </a>
            </li>
            <li data-aos="zoom-in" data-aos-delay="300">
              <a
                href="#habi"
                onClick={toggleMenu}
                className={activeSection === 'habi' ? 'nav-active' : ''}
              >
                Habilidades
              </a>
            </li>
            <li data-aos="zoom-in" data-aos-delay="400">
              <a
                href="#apps"
                onClick={toggleMenu}
                className={activeSection === 'apps' ? 'nav-active' : ''}
              >
                Aplicaciones
              </a>
            </li>
            <li data-aos="zoom-in" data-aos-delay="500">
              <a
                href="#con"
                onClick={toggleMenu}
                className={activeSection === 'con' ? 'nav-active' : ''}
              >
                Contactame
              </a>
            </li>
          </ul>
        </nav>
        <div className="textizquierda" data-aos-delay="100" data-aos="zoom-in">
          <a href={contacto.github}><i className="fab fa-github"></i></a>
          <a href={contacto.whatsapp}><i className="fab fa-whatsapp"></i></a>
          <a href={contacto.gmail}><i className="fa-regular fa-envelope"></i></a>
          <a href={contacto.linkedin}><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </header>
      <main className="hero-section" id="inicio">
        <div className="hero-content" data-aos="fade-up" data-aos-delay="600">
          <h4 data-aos="zoom-in" data-aos-delay="700">Bienvenidos a mi sitio web, me llamo</h4>
          <h1 data-aos="zoom-in" data-aos-delay="800">{personalData.nombre},</h1>
          <h3 data-aos="zoom-in" data-aos-delay="900">{personalData.myDescription}</h3>

          <div className="cta-button" data-aos="flip-down" data-aos-delay="1000" data-aos-duration="500">
            <a href="#mi"><button type="button">Continuar</button></a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;