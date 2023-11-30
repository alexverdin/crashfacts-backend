require('dotenv').config();
const { connect } = require("./models/database");
connect();

const express = require('express');
const app = express();

const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});