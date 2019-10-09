const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express()

// Remember change this apiKey with any yours from https://openweathermap.org/
const apiKey = '6daf0997137b0a47770860c96ed23f61'; 

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null});
})

app.post('/', function (req, res) {
  let city = req.body.city;

  // You can change between units=metric and units=imperial
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`


  // Remember change your language :-)
  request(url, function (err, response, body) {
    if(err){
      res.render('index', {weather: null, error: 'Ocurrió un error, por favor intentalo otra vez'});
    } else {
      let weather = JSON.parse(body)
      if(weather.main == undefined){
        res.render('index', {weather: null, error: 'Ocurrió un error, por favor intentalo otra vez'});
      } else {
        let weatherText = `Hay ${weather.main.temp} Celsius en ${weather.name}!`;
        res.render('index', {weather: weatherText, error: null});
      }
    }
  });
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!!!!')
})
