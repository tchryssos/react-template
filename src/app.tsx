import React from 'react'
import { render } from 'react-dom'
import {
	BrowserRouter, Route, Switch, withRouter,
} from 'react-router-dom'
import Home from 'pages/Home'
import useGlobalStyles from 'logic/hooks/useGlobalStyles'
import disableDevTools from 'logic/util/disableDevTools'

if (process.env.NODE_ENV === 'production') {
	disableDevTools()
}

interface AppProps {
	location: {
		pathname: string,
	},
}

const App: React.FC<AppProps> = ({ location: { pathname } }) => {
	// Create global effects or state here
	// with access to router location
	useGlobalStyles()
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
