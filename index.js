const express = require('express');
const app = express();
const router = require("./Controllers/userCOntroller");

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(router);

app.listen(PORT, () => console.log("Welcome to heroku test app"));

