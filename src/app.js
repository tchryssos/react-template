import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom'
import { JssProvider } from 'react-jss'
import Home from 'pages/Home'

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

const generateJssId = (rule, sheet) => {
	let counter = 0
	return `app--${rule.key}-${counter++}`
}

render(
	<JssProvider generateId={generateJssId}>
		<BrowserRouter>
			<RouterApp />
		</BrowserRouter>
	</JssProvider>,
	document.getElementById('app'),
)
