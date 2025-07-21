const express = require('express');
const app = express();
const port = 3000;

let tasks = [];

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { tasks });
});

app.post('/add', (req, res) => {
  const newTask = req.body.task;
  if (newTask) {
    tasks.push({ text: newTask, done: false });
  }
  res.redirect('/');
});

app.post('/done', (req, res) => {
  const index = req.body.index;
  if (tasks[index]) {
    tasks[index].done = true;
  }
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`To-Do app listening at http://localhost:${port}`);
});
