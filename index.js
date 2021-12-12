const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log("server up");
});

app.get("/app/:tempe/:to/:scales", function (req, res) {
  class temperature {
    constructor(temperature, scale) {
      this.temperature = temperature;
      this.scale = scale;
    }

    toCelsius() {
      if (this.scale == temperatureScale.Fahrenheit) {
        console.log("Fahrenheit to Celsius");
        return ((this.temperature - 32) * 5) / 9;
      }
      if (this.scale == temperatureScale.Kelvin) {
        console.log("Kelvin to Celsius");
        return this.temperature - 273.15;
      } else {
        return this.temperature;
      }
    }

    toFahrenheit() {
      if (this.scale == temperatureScale.Celsius) {
        console.log("Celsius to Fahrenheit");
        return (this.temperature * 9) / 5 + 32;
      }
      if (this.scale == temperatureScale.Kelvin) {
        console.log("Kelvin to Fahrenheit");
        return this.temperature + 273.15;
      } else {
        return this.temperature;
      }
    }
    toKelvin() {
      if (this.scale == temperatureScale.Fahrenheit) {
        console.log("Fahrenheit to Kelvin");
        return (this.temperature - 32) * (5 / 9) + 273.15;
      }
      if (this.scale == temperatureScale.Celsius) {
        console.log("Celsius to Kelvin");
        return this.temperature + 273.15;
      } else {
        return this.temperature;
      }
    }
  }

  const temperatureScale = {
    Celsius: "Celsius",
    Fahrenheit: "Fahrenheit",
    Kelvin: "Kelvin",
  };

  var tempe = req.params.tempe;
  var scales = req.params.scales;
  var to = req.params.to;

  const toTemp = (to) => {
    if (to == "toCelsius") {
      return temp.toCelsius();
    }
    if (to == "toFahrenheit") {
      return temp.toFahrenheit();
    }
    if ((to = "toKelvin")) {
      return temp.toKelvin();
    }
  };

  const scalesM = (scales) => {
    if (scales == "c") {
      return temperatureScale.Celsius;
    }
    if (scales == "f") {
      return temperatureScale.Fahrenheit;
    }
    if ((scales = "k")) {
      return temperatureScale.Kelvin;
    }
  };

  const temp = new temperature(tempe, scalesM(scales));
  res.json(toTemp(to));
});
