import { 
	applyMiddleware,
	compose,
	createStore } from 							'redux'
import { createLogger } from 			'redux-logger'
import thunk from 								'redux-thunk'
import rootReducer from 					'./rootReducer'
import { getForecastAction } from './forecast/forecast.actions'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk]
const loggerMiddleware = createLogger()


const store = createStore(
	rootReducer, 
	composeEnhancers(
		applyMiddleware(
			...middleware,
			loggerMiddleware
			)
		)
	)

store.dispatch(
	getForecastAction()
	)

export default store



// export default createStore(rootReducer)
