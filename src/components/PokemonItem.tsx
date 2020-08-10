/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Atom from '../atoms'
import { PokemonItem } from '../ui'
import { useRecoilState } from 'recoil'
import { Teambuilder } from '../interfaces'
import { View } from '../pages/Teambuilder/Teambuilder'
import { abstractToDefaultConcrete } from '../util'

interface Props {
	pokemon: Teambuilder.Pokemon.Abstract
}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoilState(Atom.Teambuilder.currentView)
	const [teams, setTeams] = useRecoilState(Atom.Teambuilder.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoilState(Atom.Teambuilder.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoilState(Atom.Teambuilder.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoilState(Atom.Teambuilder.allPokemon)
	const [allMoves, setAllMoves] = useRecoilState(Atom.Teambuilder.allMoves)

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
				setCurrentView(View.EditPokemon)
			}}
		>
			<img src={pokemon.sprite} alt={pokemon.name} />
			<p>{pokemon.name}</p>
		</PokemonItem>
	)
}
