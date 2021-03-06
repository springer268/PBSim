import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Route } from 'react-router-dom'
import StorageCacher from 'logic/StorageCacher'
import * as Pages from 'pages'
//import io from 'socket.io-client'

//const socket = io.connect('http://localhost:4000')
//socket.emit('msg', 'hello world!')

const themes = {
	blue: 'linear-gradient(-135deg, #02e6ee, #1f3cce)',
	purple: 'linear-gradient(-135deg, #c850c0, #4158d0)',
	red: 'linear-gradient(-135deg, #f45c43, #eb3349)'
}

const GlobalStyles = createGlobalStyle`
	:root {
		--bg-main: ${themes.red};
		--bg-secondary: linear-gradient(-135deg, #333, #444);

		--mobile: 1000px;
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
				<StorageCacher />
				<Route exact path='/' component={Pages.Home} />
				<Route exact path='/teambuilder' component={Pages.Teambuilder} />
				<Route exact path='/battle' component={Pages.Battle} />
			</RecoilRoot>
		</BrowserRouter>
	)
}

export default App
