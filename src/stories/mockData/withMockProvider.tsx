import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import globalUseStyles from 'logic/hooks/useGlobalStyles'

interface ProviderProps {
	children: React.ReactNode
}

const MockProvider: React.FC<ProviderProps> = ({ children }) => {
	// Add additional global hooks here
	globalUseStyles()
	return (
		<>
			{children}
		</>
	)
}

type ProviderType = {
	(story: React.FunctionComponent | React.ComponentClass): React.ReactNode
}


const withMockProvider: ProviderType = (Story) => (
	<MockProvider>
		<BrowserRouter>
			<Switch>
				<Route pathname="/" exact component={Story} />
			</Switch>
		</BrowserRouter>
	</MockProvider>
)

export default withMockProvider
