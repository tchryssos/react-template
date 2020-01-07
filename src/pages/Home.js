import React from 'react'
import injectSheet from 'react-jss'

const styles = {
	testClass: {
		width: 100,
		height: 100,
		backgroundColor: 'blue',
	},
}

const Home = ({ classes }) => {
	return (
		<>
			<div className={classes.testClass}>Whoa cool website</div>
		</>
	)
}

export default injectSheet(styles)(Home)
