import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Teambuilder from './pages/Teambuilder/Teambuilder'

// linear-gradient(-135deg, #02e6ee, #1f3cce)
// linear-gradient(-135deg, #821a1a, #ff0000)
// linear-gradient(-135deg, #c850c0, #4158d0)
const GlobalStyles = createGlobalStyle`
	:root {
		--bg-main: linear-gradient(-135deg, #f45c43, #eb3349);
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
