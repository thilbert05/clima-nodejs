const axios = require('axios');

const getClima = async (lat, lng) => {
  const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=cc438c2de36dea8a6a8f8dcee2d9c8da&units=metric`);
  return resp.data.main.temp;
  // console.log(resp.data);
  // if (!resp.data.hasOwnProperty(main)) {
  //   throw new Error(`Error al tratar de encontrar la temperatura de las corrdenadas [${lat}, ${lng}]`);
  // }
  // const temp = resp.
  // return
};

module.exports = {
  getClima
};