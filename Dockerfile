FROM node:16.13.0-alpine

WORKDIR /my-weather

COPY . .

RUN npm install

WORKDIR /my-weather/server

RUN npm install

EXPOSE 4000

EXPOSE 5000

EXPOSE 3000

CMD ["npm", "run", "exStart"]
