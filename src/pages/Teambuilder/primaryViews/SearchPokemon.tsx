/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import { ViewPrimary } from '../Teambuilder'
import atoms from '../../../atoms'
import CurrentTeamNav from '../../../components/CurrentTeamNav'
import { Searchbar, Button } from '../../../ui'
import PokemonItem from '../../../components/PokemonItem'

interface Props {}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoil(atoms.tb.currentView)
	const [teams, setTeams] = useRecoil(atoms.tb.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoil(atoms.tb.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoil(atoms.tb.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoil(atoms.tb.allPokemon)
	const [allMoves, setAllMoves] = useRecoil(atoms.tb.allMoves)

	const [input, setInput] = useState<string>('')

	const currentTeam = teams.filter(team => team.id === currentTeamID)[0]

	return (
		<>
			<CurrentTeamNav>
				<Button onClick={() => setCurrentView(ViewPrimary.Team)}>Back</Button>
			</CurrentTeamNav>
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
						return <PokemonItem pokemon={pokemon} key={pokemon.id} />
					} else {
						return <></>
					}
				})}
			</div>
		</>
	)
}
