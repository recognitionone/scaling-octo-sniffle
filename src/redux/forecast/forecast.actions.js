import ForecastService from '../../services/forecast.service'

// import * as types from "./actionTypes";
// import axios from "axios";


export const GET_FORECAST_SUCCESS = 'GET_FORECAST_SUCCESS'

// export const FETCH_WEATHER = "FETCH_WEATHER";
// export const FETCH_WEATHER_START = "FETCH_WEATHER_START";
// export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
// export const FETCH_WEATHER_FAIL = "FETCH_WEATHER_FAIL";

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


// function fetchWeatherStart() {
//   const action = { type: types.FETCH_WEATHER_START };
//   return action;
// }

// function fetchWeatherSuccess(data) {
//   const action = { type: types.FETCH_WEATHER_SUCCESS, payload: data };
//   return action;
// }

// function fetchWeatherFail(error) {
//   const action = { type: types.FETCH_WEATHER_FAIL, payload: error };
//   return action;
// }

// export function fetchWeather(city) {
//   const promise = axios({
//     url: `${ROOT_URL}&q=${city}`,
//     method: "get"
//   });
//   return function(dispatch) {
//     dispatch(fetchWeatherStart());
//     return promise
//       .then(res => {
//         dispatch(fetchWeatherSuccess(res.data));
//         return res;
//       })
//       .catch(error => {
//         dispatch(fetchWeatherFail(error));
//         return error;
//       });
//   };
// }
