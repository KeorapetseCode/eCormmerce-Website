When running with docker compose
docker-compose --env-file ./server/.env.dev up

Commands for setting up Msql container and database 

#apt-get update
#apt install npm -y
#npm install node@v14.0.0 -y
#apt upgrade mysql-server -y (it is gonna ask for a default authentication plugin. If so choose Plugin:1)
#apt upgrade mysql-client -y;
#ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password'
#//replace 'root' with your server root user name or other created username.
#//replace password with your DB server password
#(if it does not work try) ALTER USER 'localhost'@'root' IDENTIFIED WITH mysql_native_password BY 'password';
#FLUSH PRIVILEGES;
#node setup.js && node populate.js 