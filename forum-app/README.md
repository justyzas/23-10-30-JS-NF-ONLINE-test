# Projekto pavadinimas

<h1 align="center">
  <img src="https://static.fortra.com/fortra-global-assets/fortra-logo-full.svg?l=1220145297" alt="Fortra"/>
</h1>
<br/>
<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Routers%20count-%2048%20Best%20Practices-blue.svg" alt="48 items"/> <img id="last-update-badge" src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20February%2005%2C%202024-green.svg" alt="Last update: July 19, 2023" /> <img src="https://img.shields.io/badge/ %E2%9C%94%20Updated%20For%20Version%20-%20Node%2020.10.0-brightgreen.svg" alt="Updated for Node 20.10.0"/>
</div>

## Welcome!

### Prerequisites

- Node.js (v20.10.0 or later)
- MongoDB account and database
- NPM or Yarn installed

# 1. How to launch this project

**[✔] 1.1 Create new `/images` folder in `/public` folder**

**[✔] 1.2 Add `.env` file**

- Create a new file named `.env` in the project root directory.

- To do it propertly copy this code and paste it to your newly created .env file.

- Field SESSIONS_SECRET is meant for sessions security, just thnink of any password and put it there

### `.env`

```
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_NAME=
SESSIONS_SECRET=

MONGO_CONNECTION=mongodb+srv://__DB_USER:__DB_PASSWORD@__DB_HOST/__DB_NAME
```

**[✔] 1.3 Install dependencies**

- Run `npm install` in the root directory to install the required packages.

**[✔] 1.4 Launch the project**

- Use `node .`, `node app.js`, or `nodemon` (if installed) to start the project.

## Additional Information

- **Contributing**: If you're interested in contributing to this project, please see our contributing guidelines.
- **License**: This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
- **Acknowledgments**: Thanks to all the contributors and supporters of this project!

We hope you find this project useful and look forward to seeing what you build with it!
