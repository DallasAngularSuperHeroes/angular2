
import * as Loki from 'lokijs';
const express = require('express');
const app = express();
const port = 4000;

const db = new Loki('loki.json');
const todos = db.addCollection('todos');
todos.insert({name:'prepare talk', done:false});
todos.insert({name:'call sister', done:true});

console.log('In the Main');
app.get('/api/todos', (req, res) => {
  res.send(todos.find());
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

