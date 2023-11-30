const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.SERVER_PORT;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});