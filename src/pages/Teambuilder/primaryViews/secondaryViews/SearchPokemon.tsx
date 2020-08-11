/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import atoms from '../../../../atoms'
import { Searchbar } from '../../../../ui'
import PokemonItem from '../../../../components/PokemonItem'

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
			<Searchbar
				type='text'
				placeholder='Search for a Pokemon'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setInput(e.target.value)
				}}
			/>
			<div style={{ height: '395px', overflow: 'scroll' }}>
				{allPokemon.map(pokemon =>
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
