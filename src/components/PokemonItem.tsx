/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import atoms from '../atoms'
import { PokemonItem } from '../ui'
import { useRecoilState as useRecoil } from 'recoil'
import { Teambuilder } from '../interfaces'
import { ViewPrimary } from '../pages/Teambuilder/Teambuilder'
import { abstractToDefaultConcrete } from '../util'

interface Props {
	pokemon: Teambuilder.Pokemon.Abstract
}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoil(atoms.tb.currentView)
	const [teams, setTeams] = useRecoil(atoms.tb.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoil(atoms.tb.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoil(atoms.tb.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoil(atoms.tb.allPokemon)
	const [allMoves, setAllMoves] = useRecoil(atoms.tb.allMoves)

	const currentTeam = teams.filter(team => team.id === currentTeamID)[0]

	const { pokemon } = props

	const setCurrentTeam = (newTeam: Teambuilder.Team) => {
		setTeams(teams => {
			const val = teams.map(team => {
				if (team.id === newTeam.id) {
					return newTeam
				} else {
					return team
				}
			})

			localStorage.setItem('teams', JSON.stringify(val))

			return val
		})
	}

	return (
		<PokemonItem
			key={pokemon.id}
			onClick={() => {
				setCurrentTeam({
					...currentTeam,
					pokemon: [...currentTeam.pokemon, abstractToDefaultConcrete(pokemon, currentTeam.pokemon.length)]
				})
				setCurrentPokemonIndex(currentTeam.pokemon.length)
				setCurrentView(ViewPrimary.EditPokemon)
			}}
		>
			<img src={pokemon.sprite} alt={pokemon.name} />
			<p>{pokemon.name}</p>
		</PokemonItem>
	)
}
