// 🔹 POKEASISTENTE SERVER - VERCEL SERVERLESS
const MODEL = "gemini-2.0-flash";

export default async function handler(req, res) {
  const API_KEY = process.env.GEMINI_API_KEY;

  console.log("🔐 API KEY DETECTADA:", API_KEY ? "Sí ✅" : "No ❌");
  if (!API_KEY) {
    return res.status(500).json({ error: "Falta definir GEMINI_API_KEY" });
  }

  // Solo aceptamos POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido, usa POST" });
  }

  const { pokemon } = req.body;
  if (!pokemon) {
    return res.status(400).json({ respuesta: "Debes enviar el nombre del Pokémon." });
  }

  try {
    console.log("🔹 Enviando solicitud a Gemini...");

    const prompt = `Proporciona una descripción **corta y concisa** de ${pokemon} en Pokémon Go. Incluye solo información relevante: Tipo, Habilidad, Ataques principales, Debilidades y Estrategias. Usa párrafos breves y claros. No agregues datos innecesarios.`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Error en la respuesta de Gemini:", data);
      return res.status(500).json({
        respuesta: "Error en la respuesta de Gemini.",
        detalle: data.error?.message || "Error desconocido.",
      });
    }

    const texto =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No se pudo obtener una respuesta del modelo.";

    console.log("✅ Respuesta recibida correctamente.");
    res.status(200).json({ respuesta: texto });
  } catch (error) {
    console.error("❌ ERROR AL CONECTAR CON GEMINI:", error);
    res.status(500).json({ respuesta: "Error al conectar con Gemini", detalle: error.message });
  }
}
