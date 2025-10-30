# Dockerfile para PokeAsistente IA
FROM node:20-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci --production

# Copiar el resto de archivos
COPY . .

# Exponer puerto
EXPOSE 8080

# Comando de inicio
CMD ["npm", "start"]
