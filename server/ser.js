const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.json({
        'mensaje' : 'Bienvenido a la Database'
    })
  });


  app.get('/saludo/nombre', function (req, res) {
    res.json({
        'saludo' : `saludo a ${req.params.nombre}`
    })
  });

  app.get(`/edad/:XY`, function (req, res) {
      if(req.params.XY > 17){
          res.JSON({
              'Mayor' : `Eres Mayor de edad, puedes pasar: ${req.params.XY}`
          })
      }else{
          res.json({
            'Menor' : `Eres menor de edad, no puedes pasar ${req.params.XY}`
          })
          
      }
  });

 

app.get('/Database', function (req, res) {

  mongoose.connect('mongodb://localhost:27017/momento2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, res) =>{
    if(err) throw err;
    console.log("Conectado a la DB");
  })
  res.json({
    'saludo' : 'conectado'
})
  });
  


  let port = process.env.PORT || 2000;

  app.listen(port, () =>  {
      console.log(`Servidor ONLINE en el puerto ${port}`);
  });
  