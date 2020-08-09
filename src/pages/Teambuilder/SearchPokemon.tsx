import React from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import { View } from './Teambuilder'
import * as Atom from '../../atoms'

interface Props {}

export default (props: Props) => {
	const setView = useSetRecoilState(Atom.viewCurrentView)
	const setTeams = useSetRecoilState(Atom.viewTeams)
	const [currentTeam, setCurrentTeam] = useRecoilState(Atom.viewCurrentTeam)
	const searchPokemon = useRecoilValue(Atom.viewSearchPokemon)
	const setCurrentPokemon = useSetRecoilState(Atom.viewCurrentPokemon)

	return (
		<>
			<button onClick={() => setView(View.Team)}>Back</button>
			{searchPokemon?.map(pokemon => {
				return (
					<div
						key={pokemon.id}
						onClick={() => {
							setCurrentTeam(currentTeam => ({
								...currentTeam,
								pokemon: [...currentTeam.pokemon, pokemon]
							}))
							setTeams(teams => [
								{
									...currentTeam,
									pokemon: [...currentTeam.pokemon, pokemon]
								},
								...teams.filter(team => team.id !== currentTeam.id)
							])
							setCurrentPokemon(pokemon)
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
