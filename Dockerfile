FROM node:18-alpine

EXPOSE 8080

WORKDIR /app

COPY front/package*.json ./

RUN npm install

COPY front .

CMD ["npm", "run", "start"]
