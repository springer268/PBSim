/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import atoms from '../pages/Teambuilder/atoms'
import { Navbar } from '../pages/Teambuilder/ui'

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
			<h1>Pokemon Battle Simulator</h1>
			<button
				onClick={() => {
					setTeams([])
					localStorage.clear()
					document.location.reload()
				}}
			>
				Clear
			</button>
		</Navbar>
	)
}
