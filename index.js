const express = require('express'),
  bodyParser = require('body-parser'),
  file = require('./controllers/osInfo');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server listen at  ${PORT}`);
});
