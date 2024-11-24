# Stage 1: Build Stage
FROM node:23-alpine

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./

RUN npm install

# Copy all frontend files and build the app
COPY . .

EXPOSE 5173

CMD ["npm","run","dev"]
