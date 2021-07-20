const express = require('express');
const app = express();
const cors = require('cors');
const control = require('./controller');
// const port = 4004

//middlewars
app.use(express.json());
app.use(cors());

//endpoints
app.get('/api/houses', control.getHouses);
app.post('/api/houses', control.createHouse);
app.put('/api/houses/:id', control.updateHouse);
app.delete('/api/houses/:id', control.deleteHouse);

const port = process.env.PORT || 4500

app.listen(port, () => {console.log(`Server is up and running on ${port}`)})