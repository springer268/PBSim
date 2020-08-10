import React from 'react'
import styled from 'styled-components'
import { useSetRecoilState } from 'recoil'
import * as Atom from '../../atoms'

const Navbar = styled.nav`
	display: flex;
	width: 100%;
	height: 50px;
	background: linear-gradient(-135deg, #02e6ee, #1f3cce);
	justify-content: space-between;
	position: sticky;
	top: 0;

	h1 {
		margin: auto 15px;
		color: #fff;
	}

	button {
		width: 100px;
		font-size: 18px;
	}
`

interface Props {}

export default (props: Props) => {
	const setTeams = useSetRecoilState(Atom.viewTeams)

	return (
		<Navbar>
			<h1>Pokemon Battle Simulator</h1>
			<button
				onClick={() => {
					setTeams([])
					localStorage.removeItem('teams')
				}}
			>
				Clear
			</button>
		</Navbar>
	)
}
