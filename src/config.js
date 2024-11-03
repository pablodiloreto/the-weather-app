require('dotenv').config();

module.exports = {
  apiKey: process.env.API_KEY,
  baseUrl: process.env.BASE_URL,
  port: process.env.PORT || 8080,
  language: process.env.LANGUAGE || 'en',
};
