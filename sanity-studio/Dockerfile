# Base Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the project
COPY . .

# Expose the dev port for Sanity Studio
EXPOSE 3333

# Default command to run the Studio in dev mode
CMD ["npm", "run", "dev"]