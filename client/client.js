import React from 'react'
import { render } from 'react-dom'
import App from '../components/app'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let initialState = {
	todos: [{
		id: 0,
		completed: false,
		text: 'initial todo for demo purposes'
	}],
	user: {
		username: 'Bxrian (the i is silent)',
		id: 1
	}
}

let store = configureStore(initialState)

render( 
	<Provider store={store}>
		<App/>
	</Provider>,
  document.getElementById('app')
)
