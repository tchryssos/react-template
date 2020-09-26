import React from 'react'
import { render } from 'react-dom'
import {
	BrowserRouter, Route, Switch, withRouter,
} from 'react-router-dom'
import Home from 'pages/Home'
import globalUseStyles from 'constants/styles/globalUseStyles'

interface AppProps {
	location: {
		pathname: string,
	},
}

const App: React.FC<AppProps> = ({ location: { pathname } }) => {
	// Create global effects or state here
	// with access to router location
	globalUseStyles()
	return (
		<>
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
			{/* NavBar?? */}
		</>
	)
}

const RouterApp = withRouter(({ location }) => <App location={location} />)

render(
	<BrowserRouter>
		<RouterApp />
	</BrowserRouter>,
	document.getElementById('app'),
)
