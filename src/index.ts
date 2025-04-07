const express = require('express');
const router = require('../src/api/index')

const app = express();
app.use('/api/v1',router)

app.listen(3000,()=>{
    console.log('Listening to port 3000');
});
