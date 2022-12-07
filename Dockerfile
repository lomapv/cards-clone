FROM node:alpine

WORKDIR /usr/cardsClone

COPY . .

RUN npm install
RUN npm run build

ENV DATABASE_URL="postgresql://projeto1:5J3TPax1a5o@localhost:5432/power" \
    REDIS_HOST="localhost" \
    REDIS_PASSWD="rYh^24U84U&2"

CMD npm start