# Projekto pavadinimas

<h1 align="center">
  <img src="https://static.fortra.com/fortra-global-assets/fortra-logo-full.svg?l=1220145297" alt="Fortra"/>
</h1>
<br/>
<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Routers%20count-%2048%20Best%20Practices-blue.svg" alt="48 items"/> <img id="last-update-badge" src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20February%2005%2C%202024-green.svg" alt="Last update: July 19, 2023" /> <img src="https://img.shields.io/badge/ %E2%9C%94%20Updated%20For%20Version%20-%20Node%2020.10.0-brightgreen.svg" alt="Updated for Node 20.10.0"/>
</div>

# Welcome!

# 1. How to launch this project

**[✔] 1.1 Create new `/images` folder in `/public` folder**

**[✔] 1.2 Add `.env` file to the root directory and configure it to reach your MongoDB database with username and password**

To do it propertly copy this code and paste it to your newly created .env file.

Field SESSIONS_SECRET is meant for sessions security, just thnink of any password and put it there

### `.env`

```
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_NAME=
SESSIONS_SECRET=

MONGO_CONNECTION=mongodb+srv://__DB_USER:__DB_PASSWORD@__DB_HOST/__DB_NAME
```

**[✔] 1.3 Run `npm install` command in root directory**

**[✔] 1.4 Run `node .` or `node app.js`, or `nodemon` if you have installed one**
