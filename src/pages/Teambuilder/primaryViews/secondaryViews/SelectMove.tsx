import React, { FC } from 'react'
import { useAll } from 'hooks'
import { MoveItem } from 'components'
import Teambuilder from 'interfaces/Teambuilder'
import { ViewSecondary } from '../../views'

interface Props {}

const SelectMove: FC<Props> = ({ children }): JSX.Element => {
	const {
		teams,
		setTeams,
		currentTeamID,
		currentPokemonIndex,
		allPokemon,
		allMoves,
		editPokemonInput: input,
		currentMoveIndex,
		setCurrentViewSecondary
	} = useAll()

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

export default SelectMove
