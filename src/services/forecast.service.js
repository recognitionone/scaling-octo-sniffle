import getForecastUrl from '../utils/url'

export default class ForecastService {
	static getForecast() {
		return fetch (getForecastUrl())
			.then(
				(res) => { res.json() },
				(err) => { console.log('Error occured: ', err)}
				)
			.then(
				(res) => { console.log(res) }
				)
	}
}