/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import { View } from '../Teambuilder'
import Atom from '../../../atoms'
import { Teambuilder } from '../../../interfaces'
import CurrentTeamNav from '../../../components/CurrentTeamNav'
import Navbar from '../../../components/Navbar'
import { abstractToDefaultConcrete } from '../../../util'
import PokemonStage from '../../../components/PokemonStage'
import { Button, Searchbar } from '../../../ui'
import MoveItem from '../../../components/MoveItem'

interface Props {}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoilState(Atom.Teambuilder.currentView)
	const [teams, setTeams] = useRecoilState(Atom.Teambuilder.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoilState(Atom.Teambuilder.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoilState(Atom.Teambuilder.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoilState(Atom.Teambuilder.allPokemon)
	const [allMoves, setAllMoves] = useRecoilState(Atom.Teambuilder.allMoves)

	const [input, setInput] = useState<string>('')

	const currentTeam = teams.filter(team => team.id === currentTeamID)[0]
	const currentPokemon = currentTeam.pokemon.filter(pokemon => pokemon.index === currentPokemonIndex)[0]

	let moveset = [] as string[]

	if (allPokemon.length > 0) {
		moveset = allPokemon.filter(pokemon => pokemon.id === currentPokemon.id)[0].moveset
	}

	return (
		<>
			<div style={{ position: 'sticky', top: '0' }}>
				<Navbar />
				<CurrentTeamNav>
					<Button onClick={() => setCurrentView(View.Team)}>Back</Button>
				</CurrentTeamNav>
			</div>
			<PokemonStage pokemon={currentPokemon} />
			<Searchbar
				type='text'
				placeholder='Search for a Pokemon'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setInput(e.target.value)
				}}
			/>
			<div>
				{moveset.map(move => {
					const actual = allMoves.get(move)

					if (actual?.prettyName.toLowerCase().includes(input.toLowerCase())) {
						return <MoveItem move={actual} />
					} else {
						return <></>
					}
				})}
			</div>
		</>
	)
}
