import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { Global, css } from '@emotion/react';
import Home from 'pages/Home';
import disableDevTools from 'logic/util/disableDevTools';

if (process.env.NODE_ENV === 'production') {
	disableDevTools();
}

const marPadZero = css`
	margin: 0;
	padding: 0;
`;

const baseStyle = css`
	height: 100%;
	width: 100%;
	${marPadZero};
`;

const globalStyles = css`
	/* @import url(''); */
	html {
		${baseStyle};
	}
	body {
		${baseStyle};
		position: relative;
		box-sizing: border-box;
	}
	#app {
		${baseStyle};
	}
	div {
		box-sizing: border-box;
	}
	p {
		${marPadZero};
	}
	h1 {
		${marPadZero};
	}
	h2 {
		${marPadZero};
	}
	h3 {
		${marPadZero};
	}
`;

interface AppProps {
	location: {
		pathname: string;
	};
}

const App: React.FC<AppProps> = ({ location: { pathname } }) => {
	// Create global effects or state here
	// with access to router location
	return (
		<>
			<Switch>
				<Route path="/" exact component={Home} />
			</Switch>
			{/* NavBar?? */}
		</>
	);
};

const RouterApp = withRouter(({ location }) => <App location={location} />);

render(
	<>
		<Global styles={globalStyles} />
		<BrowserRouter>
			<RouterApp />
		</BrowserRouter>
	</>,
	document.getElementById('app'),
);
