'use client';
import React, { useState, useEffect } from 'react';

const HabilidadesDataPage = () => {
  const [habilidades, setHabilidades] = useState([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/habilidades') 
      .then(response => response.json())
      .then(data => setHabilidades(data))
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
