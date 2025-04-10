import React, { useState } from "react";
import { jsPDF } from "jspdf";
import curriculumData from "../../data/curriculum";

const CurriculumGenerator = () => {
    const [generating, setGenerating] = useState(false);

    const generatePDF = () => {
        setGenerating(true);
        
        // Crear nuevo documento PDF
        const doc = new jsPDF();
        
        // Configuración de fuentes
        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");
        
        // Título
        doc.text("Currículum Vitae", 105, 20, { align: "center" });
        
        // Información personal
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text(`Nombre: ${curriculumData.nombre}`, 20, 40);
        doc.text(`Email: ${curriculumData.email}`, 20, 64);
        doc.text(`Teléfono: ${curriculumData.telefono}`, 20, 72);
        
        // Enlaces con hipervínculos
        doc.setTextColor(0, 0, 255); // Color azul para links
        doc.text("Mi LinkedIn", 20, 80);
        doc.link(20, 78, 40, 5, { url: curriculumData.linkedin });
        
        doc.text("Mi GitHub", 20, 88);
        doc.link(20, 86, 40, 5, { url: curriculumData.github });
        
        doc.text("Mi Portafolio", 20, 96);
        doc.link(20, 94, 40, 5, { url: curriculumData.portafolio });
        
        doc.setTextColor(0, 0, 0); // Volver a negro para texto normal
        
        // Perfil Profesional
        let yPos = 110;
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.text("Perfil Profesional", 20, yPos);
        
        yPos += 10;
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        // Dividir texto largo en líneas
        const splitPerfil = doc.splitTextToSize(curriculumData.perfil, 170);
        doc.text(splitPerfil, 20, yPos);
        
        yPos += splitPerfil.length * 7;
        
        // Educación
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.text("Educación", 20, yPos);
        
        yPos += 10;
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        curriculumData.educacion.forEach((edu) => {
            doc.text(`${edu.titulo} - ${edu.carrera}`, 20, yPos);
            yPos += 8;
        });
        
        // Habilidades Técnicas
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.text("Habilidades Técnicas", 20, yPos);
        
        yPos += 10;
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        curriculumData.habilidades.forEach((habilidad) => {
            doc.text(`• ${habilidad}`, 25, yPos);
            yPos += 8;
            
            // Si llegamos al final de la página, crear una nueva
            if (yPos > 270) {
                doc.addPage();
                yPos = 20;
            }
        });
        
        // Proyectos Destacados
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.text("Proyectos Destacados", 20, yPos);
        
        yPos += 10;
        curriculumData.proyectos.forEach((proyecto) => {
            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
            doc.text(proyecto.nombre, 20, yPos);
            yPos += 8;
            
            doc.setFont("helvetica", "normal");
            const splitDesc = doc.splitTextToSize(proyecto.descripcion, 170);
            doc.text(splitDesc, 25, yPos);
            yPos += splitDesc.length * 7 + 5;
            
            if (yPos > 270) {
                doc.addPage();
                yPos = 20;
            }
        });
        
        // Idiomas
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.text("Idiomas", 20, yPos);
        
        yPos += 10;
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        curriculumData.idiomas.forEach((idioma) => {
            doc.text(`• ${idioma}`, 25, yPos);
            yPos += 8;
        });
        
        // Guardar el PDF
        doc.save("curriculum.pdf");
        setGenerating(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#1e293b] p-6">
            <h1 className="text-3xl font-bold mb-8">Currículum Vitae</h1>
            
            <div className="bg-white text-black p-10 rounded-lg shadow-lg max-w-3xl w-full mb-3">
                <h2 className="text-2xl font-semibold mb-4">Información Personal</h2>
                <p><strong>Nombre:</strong> {curriculumData.nombre}</p>
                <p><strong>Email:</strong> {curriculumData.email}</p>
                <p><strong>Teléfono:</strong> {curriculumData.telefono}</p>
                
                <div className="mt-4">
                    <a href={curriculumData.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4">Mi LinkedIn</a>
                    <a href={curriculumData.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4">Mi GitHub</a>
                    <a href={curriculumData.portafolio} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Mi Portafolio</a>
                </div>
            </div>
            
            <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-3xl w-full mb-3">
                <h2 className="text-2xl font-semibold mb-4">Perfil Profesional</h2>
                <p>{curriculumData.perfil}</p>
            </div>
            
            <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-3xl w-full mb-3">
                <h2 className="text-2xl font-semibold mb-4">Educación</h2>
                {curriculumData.educacion.map((edu, index) => (
                    <div key={index} className="mb-2">
                        <p>{edu.titulo} - {edu.carrera}</p>
                    </div>
                ))}
            </div>
            
            <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-3xl w-full mb-3">
                <h2 className="text-2xl font-semibold mb-4">Habilidades Técnicas</h2>
                <ul className="list-disc pl-6">
                    {curriculumData.habilidades.map((habilidad, index) => (
                        <li key={index}>{habilidad}</li>
                    ))}
                </ul>
            </div>
            
            <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-3xl w-full mb-3">
                <h2 className="text-2xl font-semibold mb-4">Proyectos Destacados</h2>
                {curriculumData.proyectos.map((proyecto, index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-lg font-semibold">{proyecto.nombre}</h3>
                        <p>{proyecto.descripcion}</p>
                    </div>
                ))}
            </div>
            
            <div className="bg-white text-black p-8 rounded-lg shadow-lg max-w-3xl w-full mb-3">
                <h2 className="text-2xl font-semibold mb-4">Idiomas</h2>
                <ul className="list-disc pl-6">
                    {curriculumData.idiomas.map((idioma, index) => (
                        <li key={index}>{idioma}</li>
                    ))}
                </ul>
            </div>
            
            <button
                onClick={generatePDF}
                disabled={generating}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-3xl shadow-md transition duration-300 disabled:bg-blue-400 cursor-pointer"
            >
                {generating ? "Generando PDF..." : "Descargar CV en PDF"}
            </button>
        </div>
    );
};

export default CurriculumGenerator;