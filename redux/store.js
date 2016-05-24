import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers' //will automatically look for an index.js
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
	applyMiddleware (thunk, logger())
)(createStore)

export default function configureStore(initialState = { todos: [], user: {} }) {
	return finalCreateStore(rootReducer, initialState) 
}