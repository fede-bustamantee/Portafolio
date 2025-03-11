"use client";
import React, { useState, useEffect } from "react";

const HabilidadesDataPage = () => {
  const [habilidades, setHabilidades] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHabilidades = async () => {
      try {
        const response = await fetch("/api/habilidades");
        if (!response.ok) throw new Error(`Error ${response.status}: No se pudieron obtener las habilidades.`);
        
        const data = await response.json();
        setHabilidades(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(err.message);
        console.error("Error al obtener las habilidades:", err);
      }
    };

    fetchHabilidades();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (habilidades.length === 0) return <div>Cargando habilidades...</div>;

  return (
    <div>
      <h1>Habilidades</h1>
      <ul>
        {habilidades.map((habilidad, index) => (
          <li key={index}>
            <img src={habilidad.icon} alt={habilidad.nombre} style={{ width: 50, height: 50 }} />
            <h3>{habilidad.nombre}</h3>
            <p>{habilidad.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabilidadesDataPage;