import React from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import { MoveItem } from '../../../../components'
import { ViewSecondary } from '../../views'
import Teambuilder from '../../../../interfaces/Teambuilder'
import atoms from '../../../../atoms'

interface Props {}

export default (props: Props) => {
	const [teams, setTeams] = useRecoil(atoms.teams)
	const [currentTeamID] = useRecoil(atoms.currentTeamID)
	const [currentPokemonIndex] = useRecoil(atoms.currentPokemonIndex)
	const [allPokemon] = useRecoil(atoms.allPokemon)
	const [allMoves] = useRecoil(atoms.allMoves)
	const [input] = useRecoil(atoms.editPokemonInput)
	const [currentMoveIndex] = useRecoil(atoms.currentMoveIndex)
	const [, setCurrentViewSecondary] = useRecoil(atoms.currentViewSecondary)

	const currentTeam = teams.find(team => team.id === currentTeamID) as Teambuilder.Team

	const currentPokemon = currentTeam.pokemon.find(
		pokemon => pokemon.index === currentPokemonIndex
	) as Teambuilder.Pokemon.Concrete

	const moveset =
		allPokemon.size > 0
			? (allPokemon.get(currentPokemon.name) as Teambuilder.Pokemon.Abstract).moveset
			: ([] as string[])

	const setCurrentPokemon = (pok: Teambuilder.Pokemon.Concrete) => {
		setTeams(teams => {
			const val = teams.map(team => {
				if (team.id === currentTeamID) {
					return {
						...team,
						pokemon: team.pokemon.map(pokemon => {
							if (pokemon.index === currentPokemonIndex) {
								return pok
							} else {
								return pokemon
							}
						})
					}
				} else {
					return team
				}
			})

			localStorage.setItem('teams', JSON.stringify(val))

			return val
		})
	}

	return (
		<>
			<div style={{ height: '395px', overflow: 'scroll' }}>
				{moveset.map(move => {
					const actual = allMoves.get(move) as Teambuilder.Move.Abstract

					return actual.prettyName.toLowerCase().includes(input.toLowerCase()) ? (
						<div
							onClick={() => {
								const newArr = [...currentPokemon.moves]
								newArr[currentMoveIndex] = { name: move }

								console.log({
									...currentPokemon,
									moves: currentPokemon.moves.map((move, i) =>
										i !== currentMoveIndex
											? move
											: ({ name: move.name } as Teambuilder.Move.Concrete)
									)
								})
								setCurrentPokemon({
									...currentPokemon,
									moves: newArr
								})
								setCurrentViewSecondary(ViewSecondary.Nothing)
							}}
						>
							<MoveItem move={actual} />
						</div>
					) : (
						<></>
					)
				})}
			</div>
		</>
	)
}
