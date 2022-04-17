FROM node:14.0.0

WORKDIR /app

COPY ./package.json ./

RUN npm i

COPY . .

EXPOSE 5003

CMD ["npm", "run", "db_init"]