# Vapor: Reviews Component
A replication of the Steam Store page - Reviews Component

## Related Projects

  - https://github.com/CapsShield/Joel-Rubin-Service
  - https://github.com/CapsShield/TeamBuild
  - https://github.com/CapsShield/TheProxy

## Usage

> Getting Started:

create a copy of .env.example, populate the MYSQL_USER and MYSQL_PWD env variables with your mySQL credentials

run:

npm install to install dependencies
npm run build to transpile JSX with webpack
npm start to initialize nodemon and create connection with server
npm run seed to seed database

NOTE: adjust mySQL global var max_allowed_packet to 16M before seeding
