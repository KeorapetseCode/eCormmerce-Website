FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD 12345

WORKDIR /app

COPY ../setup.js populate.js ./

RUN apt-get update && apt install npm -y && npm install node@v14.0.0

EXPOSE 3301

CMD ["node"]