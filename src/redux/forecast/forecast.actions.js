import ForecastService from '../../services/forecast.service'

export const SOME_ACTION = 'SOME_ACTION'
export const GET_FORECAST_SUCCESS = 'GET_FORECAST_SUCCESS'


let nextForecastId = 0;
export const someAction = content => ({
	type: SOME_ACTION,
	payload: {
		id: ++nextForecastId,
		content,
	},
})

export const getForecastSuccess = forecast => ({
	type: GET_FORECAST_SUCCESS,
	payload: { forecast },
})

export const getForecastAction = () => {
	return function (dispatch) {
		return ForecastService.getForecast()
			.then(
				(forecast) => dispatch(getForecastSuccess(forecast))
				)
	}
}