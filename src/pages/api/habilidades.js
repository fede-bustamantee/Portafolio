export async function handler(req, res) {
    const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5002";  // Asegúrate de tener la URL de tu backend

    if (req.method === 'GET') {
        // Realizamos la solicitud GET al backend Express para obtener las habilidades
        try {
            const response = await fetch(`${BACKEND_URL}/habilidades`);  // URL del backend para obtener habilidades
            const habilidades = await response.json();
            res.status(200).json(habilidades);  // Enviar las habilidades al frontend
        } catch (error) {
            console.error("Error al obtener las habilidades:", error);
            res.status(500).json({ error: "Error al obtener las habilidades" });
        }
    } else if (req.method === 'POST') {
        // Realizamos la solicitud POST al backend Express para crear una nueva habilidad
        try {
            const response = await fetch(`${BACKEND_URL}/habilidades`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(req.body),  // Enviamos el cuerpo de la solicitud
            });
            const nuevaHabilidad = await response.json();
            res.status(201).json(nuevaHabilidad);  // Devolvemos la nueva habilidad creada
        } catch (error) {
            console.error("Error al crear la habilidad:", error);
            res.status(500).json({ error: "Error al crear la habilidad" });
        }
    }
}

export default handler;