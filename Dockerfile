FROM node:alpine

WORKDIR /usr/cardsClone

COPY package*.json ./

RUN npm install

COPY . .

CMD npm start