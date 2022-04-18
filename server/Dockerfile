FROM node:14.0.0

WORKDIR /app

COPY ./package.json ./

RUN npm i

COPY . .

EXPOSE 5001

CMD ["npm", "run", "db_init"]