import React from 'react'
import styled from 'styled-components'

const Navbar = styled.nav`
	background: var(--bg-secondary);
	height: 93vh;
	min-height: 100%;
	max-height: 100vh;
	width: 100px;
	display: flex;
	flex-direction: column;
	position: sticky;
	top: 0;
	left: 0;
`

interface Props {}

export default (props: Props) => {
	return <Navbar></Navbar>
}
