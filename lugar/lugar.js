const axios = require('axios');

const getLugarLatLng = async (dir) => {
  const encodedUrl = encodeURI(dir);
  
  const instance  = axios.create({
    // url: `/`,
    baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedUrl}.json`,
    params: {'access_token': 'pk.eyJ1IjoidGhpbGJlcnQwNSIsImEiOiJja2s3bWRnNncwY3JzMnVtZjQ0NTR3ZW1rIn0.sUBbNjpF-M6lt2H7WvRzaA'}
  });
  
  const resp = await instance.get();
  
  if (resp.data.features.length === 0) {
    throw new Error(`No hay resultados para ${dir}`)
  }

  const data = resp.data.features[0];
  const direccion = data['place_name'];
  const lng = data.center[0];
  const lat = data.center[1];

  return {
    direccion,
    lat,
    lng
  };
};

module.exports = {
  getLugarLatLng
};

