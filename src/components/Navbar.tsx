import React from 'react'
import { StyledLink } from 'ui'
import styled from 'styled-components'

export const Navbar = styled.nav`
	display: flex;
	width: 100%;
	height: 50px;
	background: var(--bg-main);
	justify-content: space-between;

	${StyledLink} {
		display: flex;

		h1 {
			margin: auto 15px;
			color: #fff;
		}

		@media (max-width: 1000px) {
			margin: auto;
		}
	}
`

interface Props {}

export default (props: Props) => {
	return (
		<Navbar>
			<StyledLink to='/'>
				<h1>Pokemon Battle Simulator</h1>
			</StyledLink>
		</Navbar>
	)
}
