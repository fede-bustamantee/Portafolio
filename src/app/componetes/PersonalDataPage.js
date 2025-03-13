"use client";
import React from "react";
import Image from "next/image";
import personalData from "../data/personaldata";
import "../styles/PersonalData.css";

const PersonalData = () => {
  return (
    <section id="mi" className="about">
      <div className="main" data-aos="fade-up" data-aos-duration="100">
        
      <Image
        src={personalData.urlimagen} // Usa la URL de la imagen desde el objeto
        alt={`Foto de ${personalData.nombreApellido}`}
        width={300}
        height={300}
        className="profile-image"
      />

        {/* Información personal */}
        <div className="about-text" data-aos="fade-up">
          <h2>
            <small>01.</small> Acerca de mí
          </h2>
          <p>{personalData.myFullDescription}</p>

          {/* Botón Leer Más */}
          <a href="#habi">
            <button type="button">Leer más...</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PersonalData;