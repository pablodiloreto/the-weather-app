const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const config = require('./config');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Función para obtener datos de OpenWeather
async function getWeather(city) {
  try {
    const response = await axios.get(config.baseUrl, {
      params: {
        q: city,
        units: 'metric',
        appid: config.apiKey,
        lang: config.language,
      },
    });
    const { temp } = response.data.main;
    const { name } = response.data;
    return `Hay ${temp} grados centígrados en ${name}!`;
  } catch (error) {
    return null;
  }
}

app.get('/', (req, res) => {
  res.render('index', { weather: null, error: null });
});

app.post('/', async (req, res) => {
  const city = req.body.city;
  const weather = await getWeather(city);
  
  if (weather) {
    res.render('index', { weather, error: null });
  } else {
    res.render('index', { weather: null, error: 'Ocurrió un error, por favor intentalo otra vez' });
  }
});

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`);
});
