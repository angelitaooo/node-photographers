const express = require('express')
const app = express()
const bodyParser = require('body-parser');  
const port = 3000
const photographers = require('./routes/photographer.js');

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send(photographers.allPhotographers())
});

app.post('/photographer', (req, res) => { 
  photographers.createPhotographer(req.body);
  res.send('ok');
})

app.delete('/photographer/:userId', (req, res) => { 
  photographers.deletePhotographer(Number(req.params.userId));
  res.send('ok');
})

app.put('/photographer/:userId', (req, res) => { 
  const body = req.body;
  const result = photographers.updatePhotographer(Number(req.params.userId), body);
  console.log("*****", result)
  res.send('ok');
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})