import React from 'react';
import HomePage from './componetes/HomePage'; // Asegúrate de que la ruta sea correcta
import PersonalDataPage from './componetes/PersonalDataPage';
import HabilidadesData from './componetes/HabilidadesData';
import Aplicaciones from './componetes/Aplicaciones';
import Contacto from './componetes/Contacto';

export default function Home() {
  return (
    <div>
      <HomePage/>
      <PersonalDataPage/>
      <HabilidadesData/>
      <Aplicaciones/>
      <Contacto/>
    </div>
  );
}
