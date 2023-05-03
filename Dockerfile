FROM node:lts

WORKDIR /nodetest1

COPY package*.json /nodetest1

RUN npm install

COPY . /nodetest1

EXPOSE 3001

CMD node server.js

