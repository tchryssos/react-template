import { BrowserRouter, Switch, Route } from 'react-router-dom';

export const withMockProvider = (
	Story: React.ComponentClass | React.FunctionComponent,
): React.ReactNode => (
	<BrowserRouter>
		<Switch>
			<Route pathname="/" exact component={Story} />
		</Switch>
	</BrowserRouter>
);
