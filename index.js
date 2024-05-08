const express=require('express');

const app = express(); //express function

app.use(express.static('public')) //path

app.listen(4000,()=>{
    console.log('server is started'); //port number
})