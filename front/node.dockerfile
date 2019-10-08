FROM node:10.12.0-alpine

# install simple http server for serving static content
RUN npm install -g @vue/cli @vue/cli-service vue-template-compiler

RUN mkdir /front
WORKDIR /front
COPY package*.json ./

RUN npm install

EXPOSE 8080

COPY . .