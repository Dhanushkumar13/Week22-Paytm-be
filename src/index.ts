const express = require('express');
const router = require('./api/index')
const cors = require('cors');

const app = express();
app.use('/api/v1',router);
app.use(express.json());
app.use(cors());


app.listen(3000,()=>{
    console.log('Listening to port 3000');
});
