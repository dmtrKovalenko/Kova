const path = require('path');
const express = require('express');
const project = require('../config/project.config')

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname + '/../dist')));

app.get('*', function(request, response) {
  response.sendFile('index.html');
});

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});