import getWeatherUrl from '../utils/url'

export default class ForecastService {
  static getForecast() {
    return fetch(getWeatherUrl())
        .then(
            (res) => res.json(),
            )
  }
}
