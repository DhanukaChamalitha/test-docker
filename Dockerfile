# base image
FROM node:20-alpine

# woking directory
WORKDIR /app

# copy package.json
COPY package*.json .

# install dependencies
RUN npm install

# copy code
COPY . .

#expose port
EXPOSE 3000

# run the application
CMD [ "npm", "start" ]
