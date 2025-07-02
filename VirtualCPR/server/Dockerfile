# Use official Node.js 18 LTS Alpine image
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies first (leverages Docker layer caching)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy the rest of the source code
COPY . .

# Expose the port the app runs on
EXPOSE 5001

# Provide default environment variables (override at runtime)
ENV NODE_ENV=production

# Start the server
CMD ["node", "index.js"] 