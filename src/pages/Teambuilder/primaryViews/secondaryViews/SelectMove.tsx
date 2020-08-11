/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import atoms from '../../atoms'
import { Searchbar } from '../../../../ui'
import MoveItem from '../../components/MoveItem'
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

	const currentPokemon = currentTeam.pokemon.find(
		pokemon => pokemon.index === currentPokemonIndex
	) as Teambuilder.Pokemon.Concrete

	const moveset =
		allPokemon.size > 0
			? (allPokemon.get(currentPokemon.name) as Teambuilder.Pokemon.Abstract).moveset
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
