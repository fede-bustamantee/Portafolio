import React from 'react';
import PersonalDataPage from './componetes/PersonalDataPage'; // Asegúrate de que la ruta sea correcta
import HabilidadesData from './componetes/HabilidadesData'; // Asegúrate de que la ruta sea correcta

export default function Home() {
  return (
    <div>
      <PersonalDataPage/>
      <HabilidadesData/>
    </div>
  );
}
