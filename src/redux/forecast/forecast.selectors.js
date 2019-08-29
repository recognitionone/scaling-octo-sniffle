export const getGalleryStateList = (store) => store.forecast.list
export const getGalleryStateCity = (store) => store.forecast.city

export const weatherSampleSelector = (store) =>  
getGalleryStateList(store)
? getWeatherSample(store)
: {}

function getWeatherSample(store) {
  let sampleObj = {}
  for (var i=0; i<1; i++) {
    sampleObj[i] = {
      temp: getGalleryStateList(store)[i].main,
      date: getGalleryStateList(store)[i].dt_txt,
      icon: getGalleryStateList(store)[i].weather[0].icon,
      description: getGalleryStateList(store)[i].weather[0].description,
    }
  }
  return sampleObj
}

export const getCityName = (store) =>
  getGalleryStateCity(store)
  ? getGalleryStateCity(store).name
  : 'Loading...'

export const getCityLat = (store) =>
  getGalleryStateCity(store)
  ? getGalleryStateCity(store).coord.lat
  : 'Loading...'

export const getCityLon = (store) =>
  getGalleryStateCity(store)
  ? getGalleryStateCity(store).coord.lon
  : 'Loading...'


//weather
export const lvlApp = (store) => store.forecast

function getlvlFL(store) {
  Object.entries(lvlApp(store)).map(d => ({ 
    d: {
      city: d.city,
      list: d.list,
    }
  }))
}

export const lvlFL = (store) =>
  lvlApp(store)
  ? getlvlFL(store)
  : {}

export const lvlWeather = (store) => 
  Object.entries(getlvlFL(store)).map((d, i) => {
      return { day: i, value: d.main.temp };
    });

