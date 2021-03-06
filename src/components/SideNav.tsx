import React, { FC } from 'react'
import styled from 'styled-components'

const SideNavUI = styled.nav`
	background: var(--bg-secondary);
	height: 93vh;
	min-height: 100%;
	max-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	position: sticky;
	top: 0;
	left: 0;

	@media (max-width: 1000px) {
		display: none;
	}
`

interface Props {}

const SideNav: FC<Props> = ({ children }): JSX.Element => {
	return <SideNavUI></SideNavUI>
}

export default SideNav
