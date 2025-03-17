"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import aplicaciones from "../data/aplicaciones";
import "../styles/Aplicaciones.css";
import Link from "next/link";

const Aplicaciones = () => {
  const [showButton, setShowButton] = useState(false);

  return (
    <div id="apps" className="aplicaciones">
      <div className="titulo" data-aos="fade-up">
        <h2>
          <small>03.</small> Mis Aplicaciones
        </h2>
      </div>
      
      <div className="slider-container">
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={10}
          navigation
          loop={false}
          onReachEnd={() => setShowButton(true)}
          onSlidePrevTransitionStart={() => setShowButton(false)}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 15 },
            1024: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {aplicaciones.map((app, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <Link href={`/aplicaciones/${app.id}`}>
                  <div className="click-indicator"></div>
                </Link>
                <img className="img" src={app.icon} alt="Icono"/>
                <h5>{app.nombre}</h5>
                <div className="parrafo">
                  <p>{app.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {showButton && (
        <a href="#con">
          <button className="buut" type="button">Continuar</button>
        </a>
      )}
    </div>
  );
};

export default Aplicaciones;