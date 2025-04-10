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
      <div className="tituloa" data-aos="fade-up">
        <h2>
          <small>03.</small> Mis Aplicaciones
        </h2>
      </div>

      <div className="slider-container" data-aos="fade-up">
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={5}
          navigation
          loop={false}
          onReachEnd={() => setShowButton(true)}
          onSlidePrevTransitionStart={() => setShowButton(false)}
          breakpoints={{
            320: { slidesPerView: 1},
            768: { slidesPerView: 2},
            1024: { slidesPerView: 2},
          }}
        >
          {aplicaciones.map((app, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <Link href={`/aplicaciones/${app.id}`}>
                  <div className="click-indicator"></div>
                </Link>
                <img className="img" src={app.icon} alt="Icono" />
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