"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import habilidades from "../data/habilidades"; // Importando los datos
import "../styles/Habilidades.css";

const Habilidades = () => {
  const itemsPerPage = 3; // Número de habilidades por página
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  // Usamos los datos importados desde habilidades.js
  const habilidadesData = habilidades;

  const totalPages = Math.ceil(habilidadesData.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = habilidadesData.slice(startIndex, endIndex);

  // Verificar si es la primera o última página
  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;

  const siguienteImagen = () => {
    if (isLastPage) return;
    setDirection(1);
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const anteriorImagen = () => {
    if (isFirstPage) return;
    setDirection(-1);
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div id="habi" className="service">
      <div className="titulo" data-aos="fade-up">
        <h2>
          <small>02.</small> Habilidades
        </h2>
      </div>

      <div className="slider-container">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentPage}
            className="contenedor-habilidades"
            custom={direction}
            initial={{ opacity: 0, x: direction === 1 ? 1000 : -1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === 1 ? 1000 : -1000 }}
            transition={{ duration: 0.3 }}
          >
            {currentItems.map((habilidad, index) => (
              <div key={index} className="box">
                <div className="card">
                  <i className={habilidad.icon} style={{ color: habilidad.color }}></i>
                  <h5>{habilidad.nombre}</h5>
                  <div className="parrafo">
                    <p>{habilidad.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Solo mostrar flecha izquierda si no es la primera página */}
        {!isFirstPage && (
          <button
            onClick={anteriorImagen}
            className="arrow-button left-arrow"
            aria-label="Anterior"
          >
            <i className="fas fa-chevron-left" aria-hidden="true"></i>
          </button>
        )}

        {/* Solo mostrar flecha derecha si no es la última página */}
        {!isLastPage && (
          <button
            onClick={siguienteImagen}
            className="arrow-button right-arrow"
            aria-label="Siguiente"
          >
            <i className="fas fa-chevron-right" aria-hidden="true"></i>
          </button>
        )}
      </div>

      {/* Indicadores de página */}
      <div className="page-indicators">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`page-dot ${currentPage === index ? "active" : ""}`}
            onClick={() => {
              setDirection(index > currentPage ? 1 : -1);
              setCurrentPage(index);
            }}
          />
        ))}
      </div>

      {/* Botón Continuar solo visible en la última página */}
      {isLastPage && (
        <div className="continuar-container">
          <a className="button" href="#apps">Continuar</a>
        </div>
      )}
    </div>
  );
};

export default Habilidades;