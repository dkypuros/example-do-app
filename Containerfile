# Containerfile

# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the Node.js dependencies
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Expose port 3000 for the Fastify API
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
