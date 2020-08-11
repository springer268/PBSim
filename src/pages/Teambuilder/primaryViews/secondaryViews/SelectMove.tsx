/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import atoms from '../../../../atoms'
import { Searchbar } from '../../../../ui'
import MoveItem from '../../../../components/MoveItem'
import { Teambuilder } from '../../../../interfaces'

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
	const currentPokemon = currentTeam.pokemon.filter(pokemon => pokemon.index === currentPokemonIndex)[0]

	const moveset =
		allPokemon.length > 0
			? allPokemon.filter(pokemon => pokemon.id === currentPokemon.id)[0].moveset
			: ([] as string[])

	return (
		<>
			<Searchbar
				type='text'
				placeholder='Search for a Move'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setInput(e.target.value)
				}}
			/>
			<div style={{ height: '395px', overflow: 'scroll' }}>
				{moveset.map(move => {
					const actual = allMoves.get(move) as Teambuilder.Move.Abstract

					return actual.prettyName.toLowerCase().includes(input.toLowerCase()) ? (
						<MoveItem move={actual} />
					) : (
						<></>
					)
				})}
			</div>
		</>
	)
}
