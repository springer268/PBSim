import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { View } from './Teambuilder'
import * as Atom from '../../atoms'

interface Props {}

export default (props: Props) => {
	const setView = useSetRecoilState(Atom.viewCurrentView)
	const currentTeam = useRecoilValue(Atom.viewCurrentTeam)
	const setCurrentPokemon = useSetRecoilState(Atom.viewCurrentPokemon)

	return (
		<>
			<button
				onClick={() => {
					console.log(currentTeam)
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
