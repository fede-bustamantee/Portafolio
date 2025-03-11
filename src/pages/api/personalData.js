export async function handler(req, res) {
    const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5002";  // Asegúrate de tener la URL de tu backend
    if (req.method === 'GET') {
      // Realizamos la solicitud GET al backend Express para obtener los datos personales
        try {
        const response = await fetch(`${BACKEND_URL}/personalData`);
        const personalData = await response.json();
        res.status(200).json(personalData);  // Enviar los datos al frontend
        } catch (error) {
        console.error("Error al obtener los datos personales:", error);
        res.status(500).json({ error: "Error al obtener los datos personales" });
        }
    } else if (req.method === 'POST') {
      // Realizamos la solicitud POST al backend Express para crear un nuevo dato personal
        try {
        const response = await fetch(`${BACKEND_URL}/personalData`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(req.body),  // Enviamos el cuerpo de la solicitud
        });
        const newPersonalData = await response.json();
        res.status(201).json(newPersonalData);  // Devolvemos el nuevo dato personal creado
        } catch (error) {
        console.error("Error al crear el dato personal:", error);
        res.status(500).json({ error: "Error al crear el dato personal" });
        }
    }
}
export default handler;  