const express = require("express");
const cors = require("cors");
require('dotenv').config();

const exampleSVC = require('./services/exampleService')

//* express function
const app = express();

//* middleware for cors, middleware fires everytime the endpoint is hit.
app.use(cors());

//* our first route, GET
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//* second route for getting Data, with params
app.get('/getData/:numberGen', async (req, res) => {
    console.log("NUMBER WAS: ", req.params.numberGen)
    const response =  await exampleSVC(req.params.numberGen);
    res.json({response}); // {'data': 'Data I want.'}
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`)
});

