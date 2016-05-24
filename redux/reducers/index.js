import { combineReducers } from 'redux'
import todoReducer from './todoreducer'
import userReducer from './userreducer'

const rootReducer = combineReducers({
	todos: todoReducer,
	user: userReducer
})

export default rootReducer