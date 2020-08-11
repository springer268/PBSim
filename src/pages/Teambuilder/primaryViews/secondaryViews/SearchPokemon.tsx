/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import atoms from '../../atoms'
import { Searchbar } from '../../ui'
import PokemonItem from '../../components/PokemonItem'
import Teambuilder from '../../../../interfaces/Teambuilder'

interface Props {}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoil(atoms.currentView)
	const [teams, setTeams] = useRecoil(atoms.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoil(atoms.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoil(atoms.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoil(atoms.allPokemon)
	const [allMoves, setAllMoves] = useRecoil(atoms.allMoves)

	const [input, setInput] = useState<string>('')

	const currentTeam = teams.find(team => team.id === currentTeamID) as Teambuilder.Team

	return (
		<>
			<Searchbar
				type='text'
				placeholder='Search for a Pokemon'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setInput(e.target.value)
				}}
			/>
			<div style={{ height: '395px', overflow: 'scroll' }}>
				{Array.from(allPokemon.entries()).map(([name, pokemon]) =>
					pokemon.name.includes(input.toLowerCase()) ? (
						<PokemonItem pokemon={pokemon} key={pokemon.id} />
					) : (
						<></>
					)
				)}
			</div>
		</>
	)
}
