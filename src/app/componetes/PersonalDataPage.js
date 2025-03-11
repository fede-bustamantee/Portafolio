"use client";
import React, { useState, useEffect } from "react";

const PersonalDataPage = () => {
  const [personalData, setPersonalData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPersonalData = async () => {
      try {
        const response = await fetch("/api/personalData");
        if (!response.ok) throw new Error(`Error ${response.status}: No se pudo obtener la información personal.`);
        
        const data = await response.json();
        setPersonalData(data && data.length > 0 ? data[0] : null);
      } catch (err) {
        setError(err.message);
        console.error("Error al obtener los datos personales:", err);
      }
    };

    fetchPersonalData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!personalData) return <div>Cargando datos personales...</div>;

  return (
    <div>
      <p><strong>Nombre y Apellido:</strong> {personalData.nombreApellido}</p>
      <p><strong>Edad:</strong> {personalData.edad}</p>
      <p><strong>Dirección:</strong> {personalData.direccion}</p>
      <p><strong>Teléfono:</strong> {personalData.telefono}</p>
      <p><strong>Email:</strong> {personalData.email}</p>
      <p><strong>Descripción:</strong> {personalData.myDescription}</p>
      <img src={personalData.urlimagen} alt="Imagen personal" style={{ width: 100, height: 100, borderRadius: "50%" }} />
    </div>
  );
};

export default PersonalDataPage;
