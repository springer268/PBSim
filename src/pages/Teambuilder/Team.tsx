import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { View } from './Teambuilder'
import * as Atom from '../../atoms'

interface Props {}

export default (props: Props) => {
	const teams = useRecoilValue(Atom.viewTeams)
	const setView = useSetRecoilState(Atom.viewCurrentView)
	const currentTeamID = useRecoilValue(Atom.viewCurrentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoilState(
		Atom.viewCurrentPokemonIndex
	)

	const currentTeam = teams.filter(team => team.id === currentTeamID)[0]
	const currentPokemon = currentTeam.pokemon.filter(
		pokemon => pokemon.index === currentPokemonIndex
	)[0]

	return (
		<>
			<button
				onClick={() => {
					setView(View.Teams)
				}}
			>
				Back
			</button>
			<h1>{currentTeam.name}</h1>
			<button onClick={() => setView(View.SearchPokemon)}>Add new Pokemon</button>
			{currentTeam.pokemon.map(pokemon => {
				return (
					<div
						key={Math.random()}
						onClick={() => {
							setCurrentPokemonIndex(pokemon.index as number)
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
