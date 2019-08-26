import {  GET_FORECAST_SUCCESS } from './forecast.actions'


const initialState = {}

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_FORECAST_SUCCESS : {
			return action.payload;
		}
		default: 
			return state;
	}
}


