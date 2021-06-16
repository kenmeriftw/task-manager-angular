const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path')

app.use(express.static(path.join(__dirname, '/dist/task-manager-angular')));

app.get('/*', function(req,res) {
  res.sendFile(__dirname + '/dist/task-manager-angular/index.html');});

app.listen(port);
console.log('server_started');
