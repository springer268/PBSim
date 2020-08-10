/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { View } from '../Teambuilder'
import Atom from '../../../atoms'
import { Teambuilder } from '../../../interfaces'
import CurrentTeamNav from '../../../components/CurrentTeamNav'
import Navbar from '../../../components/Navbar'
import { Searchbar, Button } from '../../../ui'
import PokemonItem from '../../../components/PokemonItem'

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

	return (
		<div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
			<div>
				<Navbar />
				<CurrentTeamNav>
					<Button onClick={() => setCurrentView(View.Team)}>Back</Button>
				</CurrentTeamNav>
			</div>
			<Searchbar
				type='text'
				placeholder='Search for a Pokemon'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setInput(e.target.value)
				}}
			/>
			<div style={{ height: '600px', overflow: 'scroll' }}>
				{allPokemon.map(pokemon => {
					if (pokemon.name.includes(input.toLowerCase())) {
						return <PokemonItem pokemon={pokemon} />
					} else {
						return <></>
					}
				})}
			</div>
		</div>
	)
}
