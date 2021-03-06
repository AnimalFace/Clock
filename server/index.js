const express = require('express');


const app = express();

const bodyParser = require('body-parser');
const path = require('path');



const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist')));





app.listen(port, () => {
  console.log('Digital Clock is listening on port:', port);
});
