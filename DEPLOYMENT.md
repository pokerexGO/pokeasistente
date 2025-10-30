# 🚀 Guía de Deployment en Fly.io

Esta guía te ayudará a desplegar tu aplicación PokeAsistente IA en Fly.io de forma **GRATUITA**.

## 📋 Requisitos Previos

1. Una cuenta en Fly.io (gratuita)
2. Tarjeta de crédito/débito (para verificación, **NO te cobrarán** si te mantienes en el plan gratuito)

---

## 🔧 Instalación de Fly CLI

### Windows (PowerShell como Administrador):
```powershell
iwr https://fly.io/install.ps1 -useb | iex
```

### macOS:
```bash
brew install flyctl
```

### Linux/macOS (alternativa):
```bash
curl -L https://fly.io/install.sh | sh
```

---

## 🎯 Pasos para Desplegar

### 1️⃣ Autenticación

```bash
# Si eres nuevo usuario
fly auth signup

# Si ya tienes cuenta
fly auth login
```

Esto abrirá tu navegador para que inicies sesión.

---

### 2️⃣ Configurar tu API Key de Gemini

**MUY IMPORTANTE:** Tu aplicación necesita la API key de Gemini para funcionar.

```bash
fly secrets set GEMINI_API_KEY=tu_api_key_aqui
```

> ⚠️ Reemplaza `tu_api_key_aqui` con tu API key real de Gemini.

---

### 3️⃣ Desplegar la Aplicación

Desde la carpeta de tu proyecto, ejecuta:

```bash
fly launch
```

**Importante:** Cuando te pregunte:
- "Would you like to set up a Postgresql database?" → **NO**
- "Would you like to set up an Upstash Redis database?" → **NO**
- "Would you like to deploy now?" → **YES**

El proceso tomará unos minutos. Al finalizar verás algo como:

```
Visit your newly deployed app at https://pokeasistente.fly.dev
```

---

### 4️⃣ Verificar que Funciona

```bash
# Abrir tu app en el navegador
fly open

# Ver los logs en tiempo real
fly logs
```

---

## 🔄 Actualizar tu Aplicación

Cuando hagas cambios en tu código:

```bash
fly deploy
```

---

## 📊 Comandos Útiles

```bash
# Ver el estado de tu app
fly status

# Ver logs en tiempo real
fly logs

# Ver información de tu app
fly info

# Pausar tu app (deja de funcionar)
fly scale count 0

# Reactivar tu app
fly scale count 1

# Eliminar tu app completamente
fly apps destroy pokeasistente
```

---

## 💰 Plan Gratuito de Fly.io

El plan gratuito incluye:
- ✅ 3 máquinas virtuales compartidas
- ✅ 256MB de RAM por máquina
- ✅ SSL/HTTPS automático
- ✅ URL pública: `tu-app.fly.dev`
- ✅ Auto-sleep cuando no hay tráfico (se despierta automáticamente con visitas)

**Con visitas cada 5 minutos, tu app se mantendrá activa automáticamente.**

---

## 🌍 Tu URL Final

Una vez desplegado, tu aplicación estará disponible en:

**https://pokeasistente.fly.dev**

(o el nombre que hayas elegido)

---

## ❓ Problemas Comunes

### Error: "GEMINI_API_KEY no definida"
```bash
fly secrets set GEMINI_API_KEY=tu_api_key
```

### Ver todas las variables secretas
```bash
fly secrets list
```

### Mi app no arranca
```bash
# Ver los logs para identificar el error
fly logs

# Reiniciar la app
fly apps restart pokeasistente
```

---

## 🎉 ¡Listo!

Tu aplicación ahora está en línea 24/7, incluso cuando tu PC esté apagada.

**URLs Importantes:**
- App: https://pokeasistente.fly.dev
- Dashboard: https://fly.io/dashboard
- Documentación: https://fly.io/docs
