const app = require('./app');

module.exports = app.listen(3000, () => {
  console.log(`App running on port: ${3000}`);
});


// const express = require('express');
// const app = express(), bodyParser = require("body-parser"), port = 3080;

// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.send('App Works !!!!');
// });

// app.listen(port, () => {
//     console.log(`Server listening on the port:${port}`);
// });

