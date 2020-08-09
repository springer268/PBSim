import React from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import { View } from './Teambuilder'
import * as Atom from '../../atoms'
import { Teambuilder } from '../../interfaces'

interface Props {}

export default (props: Props) => {
	const setView = useSetRecoilState(Atom.viewCurrentView)
	const [teams, setTeams] = useRecoilState(Atom.viewTeams)
	const [currentTeamID, setCurrentTeamID] = useRecoilState(Atom.viewCurrentTeamID)
	const searchPokemon = useRecoilValue(Atom.viewSearchPokemon)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoilState(Atom.viewCurrentPokemonIndex)

	const currentTeam = teams.filter(team => team.id === currentTeamID)[0]

	const setCurrentTeam = (newTeam: Teambuilder.Team) => {
		setTeams(teams =>
			teams.map(team => {
				if (team.id === newTeam.id) {
					return newTeam
				} else {
					return team
				}
			})
		)
	}

	return (
		<>
			<button onClick={() => setView(View.Team)}>Back</button>
			{searchPokemon.map(pokemon => {
				return (
					<div
						key={pokemon.id}
						onClick={() => {
							setCurrentTeam({
								...currentTeam,
								pokemon: [...currentTeam.pokemon, { ...pokemon, index: currentTeam.pokemon.length }]
							})
							setCurrentPokemonIndex(currentTeam.pokemon.length)
							setView(View.EditPokemon)
						}}
					>
						<p>{pokemon.name}</p>
						<img src={pokemon.sprite} alt={pokemon.name} />
					</div>
				)
			})}
		</>
	)
}
