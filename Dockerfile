# Imagen base
FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios
COPY package*.json ./
RUN npm install

COPY . .

# Exponer el puerto del backend
EXPOSE 3000

# Comando de inicio
CMD ["npm", "start"]
