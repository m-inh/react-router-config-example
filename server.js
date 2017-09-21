'use strict';

const express = require('express');
const path = require('path');

let app = express();

app.use(express.static('build'));

app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
});

const PORT = 8080;

app.listen(PORT, function (err) {
  if (err) return console.log(err);

  console.log('Server is up on port ' + PORT);
});
