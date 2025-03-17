"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import aplicaciones from "../../data/aplicaciones";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../styles/detalleAplicacion.css";

export default function DetalleAplicacion() {
  const params = useParams();
  const { id } = params;

  const aplicacion = aplicaciones.find((app) => app.id === id);

  if (!aplicacion) {
    return (
      <div className="fullscreen-container">
        <div className="text-center">
          <h1 className="text-white text-2xl mb-4">Aplicación no encontrada</h1>
          <Link href="/#apps" className="text-blue-500 hover:underline">
            Volver a aplicaciones
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="fullscreen-container">
      {/* Nombre de la app */}
      <h1 className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold z-10">
        {aplicacion.nombre}
      </h1>

      {/* Carrusel de imágenes */}
      <Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={30}
  slidesPerView={3}
  centeredSlides={true}
  navigation
  pagination={{ clickable: true }}
  className="mb-10"
>
        {aplicacion.imagenes.map((imagen, index) => (
          <SwiperSlide key={index}>
            <img
              src={imagen}
              alt={`${aplicacion.nombre} - Imagen ${index + 1}`}
              className="object-contain w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
