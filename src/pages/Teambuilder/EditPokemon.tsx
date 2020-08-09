import React from 'react'
import { useRecoilState } from 'recoil'
import { View } from './Teambuilder'
import * as Atom from '../../atoms'

interface Props {}

export default (props: Props) => {
	const [view, setView] = useRecoilState(Atom.viewCurrentView)
	const [teams, setTeams] = useRecoilState(Atom.viewTeams)
	const [currentTeam, setCurrentTeam] = useRecoilState(Atom.viewCurrentTeam)
	const [searchPokemon, setSearchPokemon] = useRecoilState(Atom.viewSearchPokemon)
	const [currentPokemon, setCurrentPokemon] = useRecoilState(Atom.viewCurrentPokemon)

	return (
		<>
			<button onClick={() => setView(View.Team)}>Back</button>
			<h1>{currentPokemon?.name}</h1>
		</>
	)
}
