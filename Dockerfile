# Step 1: Use an official Node.js image
FROM node:18

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Step 4: Copy the application code into the container
COPY . .

# Step 5: Expose port 80 for the API
EXPOSE 80

# Step 6: Command to run the application
CMD ["node", "index.js"]
