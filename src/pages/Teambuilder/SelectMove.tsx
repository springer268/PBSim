import React, { useState } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import { View } from './Teambuilder'
import * as Atom from '../../atoms'
import { Teambuilder } from '../../interfaces'
import CurrentTeamNav from './CurrentTeamNav'
import Navbar from './NavbarPrimary'
import styled from 'styled-components'
import { abstractToDefaultConcrete } from '../../util'
import PokemonStage from './PokemonStage'
import { Button, MoveItem, Searchbar } from '../../ui'

interface Props {}

export default (props: Props) => {
	const setView = useSetRecoilState(Atom.viewCurrentView)
	const [teams, setTeams] = useRecoilState(Atom.viewTeams)
	const [currentTeamID, setCurrentTeamID] = useRecoilState(Atom.viewCurrentTeamID)
	const searchPokemon = useRecoilValue(Atom.viewSearchPokemon)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoilState(Atom.viewCurrentPokemonIndex)
	const allMoves = useRecoilValue(Atom.viewAllMoves)
	const [input, setInput] = useState<string>('')

	const currentTeam = teams.filter(team => team.id === currentTeamID)[0]
	const currentPokemon = currentTeam.pokemon.filter(pokemon => pokemon.index === currentPokemonIndex)[0]

	let moveset = [] as string[]

	if (searchPokemon.length > 0) {
		moveset = searchPokemon.filter(pokemon => pokemon.id === currentPokemon.id)[0].moveset
	}

	return (
		<>
			<div style={{ position: 'sticky', top: '0' }}>
				<Navbar />
				<CurrentTeamNav>
					<Button onClick={() => setView(View.Team)}>Back</Button>
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
						return (
							<MoveItem key={actual?.uglyName}>
								<p>{actual?.prettyName}</p>
							</MoveItem>
						)
					} else {
						return <></>
					}
				})}
			</div>
		</>
	)
}
