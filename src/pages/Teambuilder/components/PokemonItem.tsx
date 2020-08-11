/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import atoms from '../atoms'
import { PokemonItem } from '../ui'
import { useRecoilState as useRecoil } from 'recoil'
import Teambuilder from '../../../interfaces/Teambuilder'
import { ViewPrimary } from '../views'
import { abstractToDefaultConcrete } from '../util'

interface Props {
	pokemon: Teambuilder.Pokemon.Abstract
}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoil(atoms.currentView)
	const [teams, setTeams] = useRecoil(atoms.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoil(atoms.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoil(atoms.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoil(atoms.allPokemon)
	const [allMoves, setAllMoves] = useRecoil(atoms.allMoves)

	const currentTeam = teams.find(team => team.id === currentTeamID) as Teambuilder.Team

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
