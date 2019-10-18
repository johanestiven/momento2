const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
 
app.get('/', function (req, res) {
  res.json({
    '' : 'Bienvenido a la Database'})
});
 
app.get('/momento2', function (req, res) {
  res.json({
    'data' : 'Aquí van la database'})
});

app.post('/producto', function (req, res) {
  let datos = req.body;
  if (datos.nombre == undefined || datos.marca == undefined || datos.color == undefined){
    res.status(400).json({
      "err" : "Datos incompletos"

    });

  }else {res.json({
    'mensaje' : req.body
  })
  }
  
});

app.get('/producto/:id', function (req, res) {
  res.json({
    'data' : `Aquí recibi el ID para mostrar un producto. ID: ${req.params.id}`
  })
});

mongoose.connect('mongodb://localhost:27017/tienda', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err, res) =>{
  if(err) throw err;
  console.log("Conectado a la DB");
});

let port = process.env.PORT || 3000;

app.listen(port, () =>  {
    console.log(`Servidor ONLINE en el puerto ${port}`);
});
