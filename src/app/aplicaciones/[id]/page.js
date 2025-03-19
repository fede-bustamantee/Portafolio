"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import aplicaciones from "../../data/aplicaciones";
import "../../styles/detalleAplicacion.css";

export default function DetalleAplicacion() {
  const params = useParams();
  const { id } = params;
  const aplicacion = aplicaciones.find((app) => app.id === id);
  
  // Estado para el modal
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Abrir modal con la imagen seleccionada
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
    // Prevenir scroll cuando el modal está abierto
    document.body.style.overflow = 'hidden';
  };

  // Cerrar modal
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Navegar a la imagen anterior
  const prevImage = (e) => {
    e.stopPropagation(); // Evitar que el clic cierre el modal
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? aplicacion.imagenes.length - 1 : prevIndex - 1
    );
  };

  // Navegar a la imagen siguiente
  const nextImage = (e) => {
    e.stopPropagation(); // Evitar que el clic cierre el modal
    setCurrentImageIndex((prevIndex) => 
      prevIndex === aplicacion.imagenes.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Cerrar modal al presionar ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft" && modalOpen) prevImage(e);
      if (e.key === "ArrowRight" && modalOpen) nextImage(e);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen]);

  // Manejo del botón de retroceso
  useEffect(() => {
    const secciones = ['#mi', '#habi', '#apps', '#con'];
    const detectarSeccionOrigen = () => {
      const referer = document.referrer;
      for (const seccion of secciones) {
        if (referer.includes(seccion)) {
          return seccion;
        }
      }
      return '/';
    };

    const seccionOrigen = detectarSeccionOrigen();
    sessionStorage.setItem('seccionOrigen', seccionOrigen);

    const handlePopState = () => {
      const seccion = sessionStorage.getItem('seccionOrigen') || '/';
      window.location.href = seccion;
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  if (!aplicacion) {
    return (
      <div className="detalle-fullscreen-container">
        <div className="text-center">
          <h1 className="text-white text-2xl mb-4">Aplicación no encontrada</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="detalle-fullscreen-container">
      
      <h1 className="detalle-title">{aplicacion.nombre}</h1>
      
      <div className="detalle-images-container">
        {aplicacion.imagenes.map((imagen, index) => (
          <div 
            key={index} 
            className="detalle-image-card"
            onClick={() => openModal(index)}
          >
            <img 
              src={imagen} 
              alt={`${aplicacion.nombre} - Imagen ${index + 1}`} 
            />
          </div>
        ))}
      </div>
      
      {/* Modal para imágenes ampliadas */}
      <div 
        className={`detalle-modal-overlay ${modalOpen ? 'active' : ''}`}
        onClick={closeModal}
      >
        <div className="detalle-modal-content" onClick={(e) => e.stopPropagation()}>
          <img 
            src={aplicacion.imagenes[currentImageIndex]} 
            alt={`${aplicacion.nombre} - Imagen ampliada`}
            className="detalle-modal-image"
          />
          
          <button className="detalle-modal-close" onClick={closeModal}>
          <i className="fa-solid fa-xmark"></i>
          </button>
          
          {aplicacion.imagenes.length > 1 && (
            <>
              <button className="detalle-modal-nav detalle-modal-prev" onClick={prevImage}>
              <i className="fa-solid fa-angle-left"></i>
              </button>
              <button className="detalle-modal-nav detalle-modal-next" onClick={nextImage}>
              <i className="fa-solid fa-angle-right"></i>
              </button>
              <div className="detalle-modal-counter">
                {currentImageIndex + 1} / {aplicacion.imagenes.length}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}