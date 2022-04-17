FROM node:14.0.0

WORKDIR /app

COPY ./package.json ./

RUN npm i

COPY . .

EXPOSE 

CMD ["npm", "start"]