import React, { FC } from 'react'
import styled from 'styled-components'
import { StyledLink } from 'ui'

export const NavbarUI = styled.nav`
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

const Navbar: FC<Props> = ({ children }): JSX.Element => {
	return (
		<NavbarUI>
			<StyledLink to='/'>
				<h1>Pokemon Battle Simulator</h1>
			</StyledLink>
		</NavbarUI>
	)
}

export default Navbar
