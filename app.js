const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
  }
}).help().argv;

const {getLugarLatLng} = require('./lugar/lugar');
const {getClima} = require('./clima/clima');

let lat;
let lng;
let direccion;


// console.log(getLugarLatLng(argv.direccion));
// getLugarLatLng(argv.direccion)
//   .then(lugarLatLng => {
//     lat = lugarLatLng.lat;
//     lng = lugarLatLng.lng;
//     direccion = lugarLatLng.direccion;
//     return getClima(lat, lng);
//   })
//   .then(temp => console.log(`La temperatura de "${direccion}" es de ${temp}ºC`))
//   .catch(err => {
//     console.log(err);
//   });

const getInfo = async (direccion) => {
  
  try {
    const lugarInfo = await getLugarLatLng(direccion);
    const clima = await getClima(lugarInfo.lat, lugarInfo.lng);
    return `El clima de ${direccion} es de ${clima}ºC`;
  } catch (error) {
    throw new Error(`No se pudo determinar la temperatura de ${direccion}`);
  }

};

getInfo(argv.direccion).then(console.log).catch(console.log);

