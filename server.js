// ==========================================
// 🔹 POKEASISTENTE SERVER - REST + GEMINI OK
// ==========================================
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

// -------------------------------
// 🔧 CONFIGURACIÓN INICIAL
// -------------------------------
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

console.log("📂 Carpeta pública configurada en:", path.join(__dirname, "public"));

// -------------------------------
// 🤖 CONFIGURACIÓN DEL MODELO
// -------------------------------
const MODEL = "gemini-2.0-flash"; // 🔹 Modelo REST oficial de Gemini
const API_KEY = process.env.GEMINI_API_KEY; // ⚠️ Se debe definir en .env

if (!API_KEY) {
  console.error("❌ ERROR: Falta definir GEMINI_API_KEY en el archivo .env");
  process.exit(1);
}

console.log(`✅ Modelo configurado: ${MODEL}`);

// -------------------------------
// 📄 RUTA PRINCIPAL (Frontend)
// -------------------------------
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// -------------------------------
// 🔍 RUTA /pokemon (consulta a Gemini)
// -------------------------------
app.post("/pokemon", async (req, res) => {
  const pokemon = req.body.pokemon?.trim();

  console.log("\n[REQUEST] POST /pokemon");
  console.log("📌 Pokémon recibido:", pokemon);

  if (!pokemon) {
    return res.status(400).json({ respuesta: "Debes enviar el nombre del Pokémon." });
  }

  try {
    console.log("🔹 Enviando solicitud a Gemini...");

    // 🔹 Prompt actualizado: texto corto, conciso y relevante
    const prompt = `Proporciona una descripción **corta y concisa** de ${pokemon} en Pokémon Go. Incluye solo información relevante: Tipo, Habilidad, Ataques principales, Debilidades y Estrategias. Usa párrafos breves y claros. No agregues datos innecesarios.`;

    // 🔹 Petición REST a Gemini
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
    res.json({ respuesta: texto });
  } catch (error) {
    console.error("❌ ERROR AL CONECTAR CON GEMINI:");
    console.error(error);
    res.status(500).json({
      respuesta: "Error al conectar con Gemini.",
      detalle: error.message,
    });
  }
});

// -------------------------------
// 🚀 INICIO DEL SERVIDOR
// -------------------------------
app.listen(port, "0.0.0.0", () => {
  console.log("===============================================");
  console.log(`✅ Servidor iniciado en: http://localhost:${port}`);
  console.log("===============================================");
  console.log("🔹 Usa el buscador en la web o POST /pokemon con JSON { pokemon: 'pikachu' }");
});









