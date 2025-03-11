'use client';
import React, { useState, useEffect } from 'react';

const HabilidadesDataPage = () => {
  const [habilidades, setHabilidades] = useState([]);

  // Realizamos la solicitud GET a la API de Next.js para obtener las habilidades
  useEffect(() => {
    fetch('/api/habilidades')  // Solicita a la API de Next.js que a su vez hace la solicitud al backend
      .then(response => response.json())
      .then(data => {
        setHabilidades(data);  // Asumimos que obtenemos un array de habilidades
      })
      .catch(error => console.error('Error al obtener las habilidades:', error));
  }, []);

  if (habilidades.length === 0) {
    return <div>Cargando habilidades...</div>;
  }

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
