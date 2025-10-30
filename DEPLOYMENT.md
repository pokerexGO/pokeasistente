# 🚀 Guía de Deployment en Vercel

Esta guía te ayudará a desplegar tu aplicación PokeAsistente IA en Vercel de forma **100% GRATUITA** y **SIN TARJETA DE CRÉDITO**.

## ✅ Ventajas de Vercel

- 🆓 **Gratis para siempre** (sin límite de tiempo)
- 💳 **NO requiere tarjeta de crédito**
- ⚡ **Muy rápido** (CDN global)
- 🔒 **HTTPS automático**
- 🔄 **Deploy automático** desde GitHub
- 🌍 **Disponible 24/7** (sin auto-sleep)

---

## 📋 Requisitos Previos

1. Una cuenta en GitHub (gratis)
2. Una cuenta en Vercel (gratis, no requiere tarjeta)
3. Tu código subido a un repositorio de GitHub

---

## 🎯 Pasos para Desplegar

### 1️⃣ Subir tu código a GitHub

Si aún no tienes tu código en GitHub:

1. Ve a [github.com](https://github.com) y crea una cuenta (si no tienes)
2. Crea un nuevo repositorio
3. Descarga tu proyecto de Replit (menú → Download as ZIP)
4. Descomprime y sube los archivos a tu repositorio de GitHub

---

### 2️⃣ Conectar con Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en **"Sign Up"** (Registrarse)
3. Selecciona **"Continue with GitHub"**
4. Autoriza a Vercel para acceder a tus repositorios

---

### 3️⃣ Importar tu Proyecto

1. En el dashboard de Vercel, haz clic en **"Add New Project"**
2. Busca tu repositorio **"pokeasistente"** (o como lo hayas llamado)
3. Haz clic en **"Import"**

---

### 4️⃣ Configurar Variables de Entorno

**MUY IMPORTANTE:** Debes configurar tu API key de Gemini.

1. En la página de configuración del proyecto, ve a **"Environment Variables"**
2. Agrega la siguiente variable:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** Tu API key de Gemini (la que usas actualmente)
3. Haz clic en **"Add"**

---

### 5️⃣ Deploy

1. Deja todas las demás configuraciones por defecto
2. Haz clic en **"Deploy"**
3. Espera 1-2 minutos mientras Vercel construye tu app

¡Listo! Vercel te dará una URL como:
```
https://pokeasistente.vercel.app
```

---

## 🔄 Actualizar tu Aplicación

Cada vez que hagas cambios en tu código:

1. Haz commit y push a GitHub
2. Vercel automáticamente detectará los cambios
3. Deploy automático en ~30 segundos

**¡No necesitas hacer nada más!**

---

## 📊 Comandos Útiles

### Ver logs en tiempo real:
1. Ve a tu proyecto en Vercel
2. Selecciona el deployment
3. Click en "Logs"

### Variables de entorno:
1. Ve a Settings → Environment Variables
2. Agrega, edita o elimina variables
3. Redeploy para aplicar cambios

---

## 💰 Plan Gratuito de Vercel

El plan Hobby (gratuito) incluye:
- ✅ Proyectos ilimitados
- ✅ 100 GB de ancho de banda/mes
- ✅ 100,000 invocaciones serverless/mes
- ✅ HTTPS y SSL automático
- ✅ Deploy automático desde Git
- ✅ **NO requiere tarjeta de crédito**

**Límite importante:** Solo para uso personal/hobby (NO comercial)

Con visitas cada 5 minutos, estarás muy por debajo de los límites.

---

## 🌍 Tu URL Final

Una vez desplegado, tu aplicación estará disponible en:

**https://pokeasistente.vercel.app**

(O el nombre que hayas elegido)

Puedes agregar un dominio personalizado gratis si lo deseas.

---

## ❓ Problemas Comunes

### Error: "GEMINI_API_KEY no definida"
**Solución:**
1. Ve a Settings → Environment Variables
2. Verifica que `GEMINI_API_KEY` esté configurada
3. Redeploy el proyecto

### Error: "Function timeout"
**Solución:**
- Vercel tiene un timeout de 10 segundos en el plan gratuito
- Si Gemini tarda mucho, reduce la longitud del prompt

### La app no carga
**Solución:**
1. Revisa los logs en Vercel
2. Verifica que todos los archivos estén en GitHub
3. Asegúrate de que `vercel.json` esté presente

---

## 🎉 ¡Listo!

Tu aplicación ahora está en línea 24/7, completamente gratis y sin necesidad de tarjeta de crédito.

**URLs Importantes:**
- Tu App: https://pokeasistente.vercel.app
- Dashboard: https://vercel.com/dashboard
- Documentación: https://vercel.com/docs

---

## 📝 Notas Adicionales

### Diferencias con el servidor local:
- ✅ Tu app ahora usa **funciones serverless** (más eficiente)
- ✅ Se escala automáticamente según el tráfico
- ✅ No hay "cold start" perceptible
- ✅ CDN global = más rápido en todo el mundo

### Uso comercial:
Si en el futuro tu proyecto genera ingresos, necesitarás actualizar al plan Pro ($20/mes). Pero para proyectos personales, el plan gratuito es perfecto.

---

**¿Necesitas ayuda?** Consulta la [documentación de Vercel](https://vercel.com/docs) o busca en la comunidad.
