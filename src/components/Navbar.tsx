/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import Atom from '../atoms'

const Navbar = styled.nav`
	display: flex;
	width: 100%;
	height: 50px;
	background: linear-gradient(-135deg, #02e6ee, #1f3cce);
	justify-content: space-between;

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
	const [currentView, setCurrentView] = useRecoilState(Atom.Teambuilder.currentView)
	const [teams, setTeams] = useRecoilState(Atom.Teambuilder.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoilState(Atom.Teambuilder.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoilState(Atom.Teambuilder.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoilState(Atom.Teambuilder.allPokemon)
	const [allMoves, setAllMoves] = useRecoilState(Atom.Teambuilder.allMoves)

	return (
		<Navbar>
			<h1>Pokemon Battle Simulator</h1>
			<button
				onClick={() => {
					setTeams([])
					localStorage.clear()
				}}
			>
				Clear
			</button>
		</Navbar>
	)
}
