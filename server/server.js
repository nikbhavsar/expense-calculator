const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;

const app =express();
const publicPAth = path.join(__dirname, '..','public');

app.use(express.static(publicPAth));

app.get('*', (req,res)=>{
    res.sendFile(path.join(publicPAth,'index.html'));
});

app.listen(port, ()=>{
    console.log('server is running');
});
