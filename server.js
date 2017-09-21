'use strict';

const express = require('express');
const path = require('path');

let app = express();

app.use(express.static('build'));

app.get('*', function (request, response) {
  console.log(request);
  console.log('===============================');
  response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
});

app.listen(8080, function (err) {
  if (err) return console.log(err);

  console.log('Fms-webapp server is up on port ' + 8080);
});
