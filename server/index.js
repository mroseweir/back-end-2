const express = require('express');
const app = express();
const cors = require('cors');
const control = require('./controller');
// const port = 4004
const Rollbar = require("rollbar")

const rollbar = new Rollbar({
    accessToken: 'e6362af4dd944f49b6dff5d54164ab3e',
    captureUncaught: true,
    captureUnhandledRejections: true
});
rollbar.log('Hello World!')

app.use(express.static("public"));
const path = require("path");

//middlewars
app.use(express.json());
app.use(cors());

//endpoints
app.get('/api/houses', control.getHouses);
app.post('/api/houses', control.createHouse);
app.put('/api/houses/:id', control.updateHouse);
app.delete('/api/houses/:id', control.deleteHouse);

const port = process.env.PORT || 4005

app.listen(port, () => {console.log(`Server is up and running on ${port}`)})