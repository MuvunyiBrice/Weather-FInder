const axios = require("axios");
const API_KEY = "a416fa6b6bf52d8c4313e221cd7f9c0c";

exports.renderHomePage = (req, res) => {
  res.render("index");
};

exports.getWeather = (req, res) => {
  const city = req.body.city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  axios
    .get(url)
    .then((result) => {
      res.render("index", {
        weather: `It is currently ${result.data.main.temp} in ${result.data.name}.`,
      });
    })
    .catch((err) => {
      res.render("index", {
        error: err,
      });
    });
};

exports.renderAboutPage = (req, res) => {
  res.render("about");
};
