import ForecastService from '../../services/forecast.service'


export const GET_FORECAST_SUCCESS = 'GET_FORECAST_SUCCESS'

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