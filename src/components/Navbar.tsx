import React from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import atoms from '../atoms'
import styled from 'styled-components'
import { StyledLink } from '../ui'

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
	}

	button {
		width: 100px;
		font-size: 18px;
		cursor: pointer;
	}
`

interface Props {}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoil(atoms.currentView)
	const [teams, setTeams] = useRecoil(atoms.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoil(atoms.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoil(atoms.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoil(atoms.allPokemon)
	const [allMoves, setAllMoves] = useRecoil(atoms.allMoves)

	return (
		<Navbar>
			<StyledLink to='/'>
				<h1>Pokemon Battle Simulator</h1>
			</StyledLink>
		</Navbar>
	)
}
