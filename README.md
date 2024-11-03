# Welcome to TheWeatherApp
TheWeatherApp is an application developed in Node.js for checking weather conditions and temperatures for different places around the world. It works simply: it has a graphical interface where you can enter a city name, and it queries the openweathermap.org service to retrieve weather data.

## About this App
* [Licensed](LICENSE) under the Apache License, Version 2.0.
* Project originally sourced from [this repo](https://github.com/bmorelli25/simple-nodejs-weather-app) on GitHub.
* Initial adaptations and contributions made by [Pablo Di Loreto](https://pablodiloreto.com/).

## How to run this app locally?

Create a local `.env` file in the `/src` folder with the following content:

```
API_KEY=YOUR_API_KEY // Obtain from openweathermap.org 
BASE_URL=http://api.openweathermap.org/data/2.5/weather 
PORT=8080 // Port where your app will run locally 
LANGUAGE=COMPLETE // Response language for openweathermap: es or en, for example
```
When you’re ready, run:

```
node start // By default, open a browser and visit: localhost:8080
node dev // By default, open a browser and visit: localhost:8080
```
