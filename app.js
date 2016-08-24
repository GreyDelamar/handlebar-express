const express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.json({message: 'Hello from express'})
})

app.get('/page2', (req, res) => {
  res.json({message: 'I am from page 2!!!!'})
})


app.listen(3000, ()=>{
  console.log('Server is running on port 3000')
})
