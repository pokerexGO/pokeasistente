# PokeAsistente IA

## Overview

PokeAsistente IA is a Pokemon information assistant powered by Google's Gemini AI. The application provides a Pokedex-style interface where users can query information about Pokemon, and the AI responds with detailed information using natural language processing. It's built as a simple web application with a Node.js backend that interfaces with the Gemini 2.0 Flash model via REST API.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Problem:** Need an intuitive, visually appealing interface for Pokemon queries.

**Solution:** Single-page application (SPA) with a Pokedex-inspired design served as static HTML/CSS/JavaScript.

**Key Decisions:**
- Static file serving through Express for simplicity
- Retro Pokedex aesthetic with radial gradients and card-based layout
- Direct fetch API calls to backend endpoint
- Mobile-responsive design with viewport meta tags

**Pros:**
- Lightweight and fast
- No build process required
- Easy to understand and modify
- Nostalgic user experience

**Cons:**
- Limited to vanilla JavaScript (no framework benefits)
- Manual DOM manipulation

### Backend Architecture

**Problem:** Need to process Pokemon queries and generate AI responses efficiently.

**Solution:** Express.js REST API server acting as a proxy between the frontend and Gemini AI.

**Key Decisions:**
- ES6 modules (`"type": "module"` in package.json)
- Express 5.1.0 for HTTP server
- Body-parser middleware for JSON request handling
- Environment-based configuration with dotenv
- REST API endpoint pattern (`POST /pokemon`)

**Architecture Pattern:**
```
Client → Express Server → Gemini AI REST API → Response
```

**Pros:**
- Simple, stateless architecture
- Easy to scale horizontally
- Clear separation of concerns
- Industry-standard tools

**Cons:**
- No request caching (each query hits Gemini API)
- No state management for conversation history
- Limited error handling for API failures

### API Structure

**Endpoint Design:**
- `GET /` - Serves the main frontend application
- `POST /pokemon` - Accepts Pokemon query and returns AI-generated response

**Request/Response Format:**
```javascript
// Request
{
  "pokemon": "Pikachu"
}

// Response (from Gemini AI)
{
  // AI-generated content about the Pokemon
}
```

### Error Handling

**Problem:** Application must gracefully handle missing configuration and API errors.

**Solution:** 
- Server-side validation of required environment variables on startup
- Process exits if critical configuration (API key) is missing
- Input validation for Pokemon name trimming

**Alternatives Considered:**
- Runtime warnings (rejected - would allow broken state)
- Default/fallback responses (rejected - misleading to users)

### Configuration Management

**Problem:** Sensitive API keys and environment-specific settings need secure storage.

**Solution:** Environment variables loaded via dotenv package.

**Required Variables:**
- `GEMINI_API_KEY` - Google AI API authentication
- `PORT` - Server port (defaults to 5000)

## External Dependencies

### AI Service Integration

**Google Gemini AI (Primary Integration)**
- **Service:** Google Generative AI Language API
- **Model:** gemini-2.0-flash
- **Interface:** REST API (not SDK)
- **Package:** `@google-ai/generativelanguage@^1.1.0`
- **Purpose:** Natural language processing for Pokemon information queries
- **Authentication:** API key-based
- **Rate Limits:** Subject to Google's API quotas

### HTTP Client

**node-fetch**
- **Version:** ^3.3.2
- **Purpose:** Making HTTP requests to Gemini REST API
- **Why Chosen:** Native fetch API compatibility in Node.js environment

### Core Dependencies

1. **express** (^5.1.0) - Web server framework
2. **body-parser** (^2.2.0) - JSON request body parsing middleware
3. **dotenv** (^17.2.3) - Environment variable management

### Deployment Platform

**Fly.io**
- **Purpose:** Production hosting platform for 24/7 uptime
- **Plan:** Free tier with auto-sleep (wakes on request)
- **Requirements:** Credit card for verification (no charges on free tier)
- **Tools:** Fly CLI for deployment automation
- **Configuration:** 
  - Dockerfile for containerization
  - fly.toml with autoscale settings (min_machines_running = 0 for free tier)
  - Port 8080 for production (5000 for Replit development)
- **Deployment Guide:** See DEPLOYMENT.md for complete instructions
- **Auto-sleep Behavior:** App sleeps after ~5 minutes of inactivity, wakes in 2-3 seconds on first request
- **URL:** `pokeasistente.fly.dev` (or custom domain)

### Runtime Environment

- **Node.js:** >=14.0.0 (required by Gemini package)
- **Package Manager:** npm (lockfile version 3)
- **Module System:** ES6 modules