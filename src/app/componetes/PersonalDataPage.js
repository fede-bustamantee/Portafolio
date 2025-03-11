'use client';
import React, { useState, useEffect } from 'react';

const PersonalDataPage = () => {
  const [personalData, setPersonalData] = useState(null);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/api/personalData')
      .then(response => response.json())
      .then(data => setPersonalData(data[0]))  
      .catch(error => console.error('Error al obtener los datos personales:', error));
  }, []);

  if (!personalData) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <p><strong>Nombre y Apellido:</strong> {personalData.nombreApellido}</p>
      <p><strong>Edad:</strong> {personalData.edad}</p>
      <p><strong>Dirección:</strong> {personalData.direccion}</p>
      <p><strong>Teléfono:</strong> {personalData.telefono}</p>
      <p><strong>Email:</strong> {personalData.email}</p>
      <p><strong>Descripción:</strong> {personalData.myDescription}</p>
      <img src={personalData.urlimagen} alt="Imagen personal" />
    </div>
  );
};

export default PersonalDataPage;
