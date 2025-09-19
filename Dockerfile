# Utiliza una imagen oficial de Node.js como base
FROM node:22-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

# Genera el contenido en markdown
RUN npm build:content
# Construye la aplicación Next.js
RUN npm run build

# Expone el puerto en el que Next.js se ejecuta por defecto
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]