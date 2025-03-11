'use client';
import React, { useState, useEffect } from 'react';

const PersonalDataPage = () => {
const [personalData, setPersonalData] = useState(null);

  // Realizamos la solicitud GET a la API de Next.js
useEffect(() => {
    fetch('/api/personalData')  // Solicitamos a la API de Next.js que a su vez hace la solicitud a Express
    .then(response => response.json())
    .then(data => {
        setPersonalData(data[0]);  // Asumimos que obtenemos un array, y tomamos el primer elemento
    })
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
