import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Teambuilder from './pages/Teambuilder/Teambuilder'

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		color: linear-gradient(-135deg,#c850c0, #4158d0);
	}

	body {
		padding: 30px;
	}
`

const App = () => {
	return (
		<BrowserRouter>
			<RecoilRoot>
				<GlobalStyles />
				<Route exact path='/' component={Home} />
				<Route exact path='/teambuilder' component={Teambuilder} />
			</RecoilRoot>
		</BrowserRouter>
	)
}

export default App
