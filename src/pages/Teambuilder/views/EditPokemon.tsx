/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useRecoilState } from 'recoil'
import { View } from '../Teambuilder'
import Atom from '../../../atoms'
import { Teambuilder } from '../../../interfaces'
import CurrentTeamNav from '../../../components/CurrentTeamNav'
import PokemonStage from '../../../components/PokemonStage'
import Navbar from '../../../components/Navbar'
import { Button } from '../../../ui'

interface Props {}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoilState(Atom.Teambuilder.currentView)
	const [teams, setTeams] = useRecoilState(Atom.Teambuilder.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoilState(Atom.Teambuilder.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoilState(Atom.Teambuilder.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoilState(Atom.Teambuilder.allPokemon)
	const [allMoves, setAllMoves] = useRecoilState(Atom.Teambuilder.allMoves)

	const currentTeam = teams.filter(team => team.id === currentTeamID)[0]
	const currentPokemon = currentTeam.pokemon.filter(pokemon => pokemon.index === currentPokemonIndex)[0]

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
			<Navbar />
			<CurrentTeamNav>
				<Button onClick={() => setCurrentView(View.Team)}>Back</Button>
			</CurrentTeamNav>
			<PokemonStage pokemon={currentPokemon} />
		</>
	)
}
