import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import Home from 'pages/Home'

import './app.css'

const App = ({ location }) => {
	// Create global effects or state here
	// with access to router location

	return (
		<>
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
			{/* NavBar?? */}
		</>
	)
}

const RouterApp = withRouter(props => <App {...props} />)

render(
	<BrowserRouter>
		<RouterApp />
	</BrowserRouter>,
	document.getElementById('app'),
)
