import React from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import { View } from './Teambuilder'
import * as Atom from '../../atoms'
import { Teambuilder } from '../../interfaces'

interface Props {}

export default (props: Props) => {
	const setView = useSetRecoilState(Atom.viewCurrentView)
	const [teams, setTeams] = useRecoilState(Atom.viewTeams)
	const currentTeamID = useRecoilValue(Atom.viewCurrentTeamID)
	const currentPokemonIndex = useRecoilValue(Atom.viewCurrentPokemonIndex)

	const currentTeam = teams.filter(team => team.id === currentTeamID)[0]
	const currentPokemon = currentTeam.pokemon.filter(pokemon => pokemon.index === currentPokemonIndex)[0]

	const setCurrentPokemon = (pok: Teambuilder.Pokemon) => {
		setTeams(teams =>
			teams.map(team => {
				if (team.id === currentTeamID) {
					return {
						...team,
						pokemon: team.pokemon.map(pokemon => {
							if (pokemon.index === currentPokemonIndex) {
								return pok
							} else {
								return pokemon
							}
						})
					}
				} else {
					return team
				}
			})
		)
	}

	return (
		<>
			<button onClick={() => setView(View.Team)}>Back</button>
			<h1>{currentPokemon.name}</h1>
			<button onClick={() => setCurrentPokemon({ ...currentPokemon, name: 'yenis lmao' })}>Epic haha</button>
			<button onClick={() => console.log(currentTeam)}>log</button>
		</>
	)
}
