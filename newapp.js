const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

let visitCount = 0;

app.get('/', (req, res) => {
  visitCount++;
  res.send(`
    <h1>Welcome to My Site!</h1>
    <p>This page has been visited <strong>${visitCount}</strong> times.</p>
  `);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
