import {  GET_FORECAST_SUCCESS } from './forecast.actions'
// import * as actions from "../actions/actionTypes";


const initialState = {}

// export const initialState = {
//   data: [],
//   isLoading: false,
//   errorMessage: ""
// };


export default function forecast(state = initialState, action) {
	switch (action.type) {
		case GET_FORECAST_SUCCESS : {
			return action.payload.forecast;
		}


		// case actions.FETCH_WEATHER_SUCCESS:
  //     const { city, list } = action.payload;
  //     const obj = {
  //       city,
  //       list
  //     };
  //     return {
  //       ...state,
  //       isLoading: false,
  //       data: [obj].concat(state.data),
  //       errorMessage: ""
  //     };
  //   case actions.FETCH_WEATHER_START:
  //     return {
  //       ...state,
  //       isLoading: true,
  //       errorMessage: ""
  //     };
  //   case actions.FETCH_WEATHER_FAIL:
  //     return {
  //       ...state,
  //       isLoading: false,
  //       errorMessage: "Cannot find the city you just typed"
  //     };


		default: 
			return state;
	}
}


