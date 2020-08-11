/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import { ViewPrimary, ViewSecondary } from '../views'
import atoms from '../atoms'
import Teambuilder from '../../../interfaces/Teambuilder'
import CurrentTeamNav from '../components/CurrentTeamNav'
import PokemonStage from '../components/PokemonStage'
import { Button } from '../../../ui'
import SearchPokemon from './secondaryViews/SearchPokemon'
import SelectMove from './secondaryViews/SelectMove'

interface Props {}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoil(atoms.currentView)
	const [teams, setTeams] = useRecoil(atoms.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoil(atoms.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoil(atoms.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoil(atoms.allPokemon)
	const [allMoves, setAllMoves] = useRecoil(atoms.allMoves)

	const [currentViewSecondary, setCurrentViewSecondary] = useRecoil(atoms.currentViewSecondary)

	const currentTeam = teams.find(team => team.id === currentTeamID) as Teambuilder.Team

	const currentPokemon = currentTeam.pokemon.find(
		pokemon => pokemon.index === currentPokemonIndex
	) as Teambuilder.Pokemon.Concrete

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
			<CurrentTeamNav>
				<Button onClick={() => setCurrentView(ViewPrimary.Team)}>Back</Button>
			</CurrentTeamNav>
			<PokemonStage pokemon={currentPokemon} />
			{(() => {
				switch (currentViewSecondary) {
					case ViewSecondary.Nothing:
						return <p style={{ margin: '10px' }}>Click a text field to edit the Pokemon!</p>
					case ViewSecondary.Moves:
						return <SelectMove />
					case ViewSecondary.Pokemon:
						return <SearchPokemon />
					case ViewSecondary.Stats:
						return 3
					case ViewSecondary.Items:
						return 4
					case ViewSecondary.Abilities:
						return 5
					case ViewSecondary.Misc:
						return 6
					default:
						return <h1>Error: Unhandled Secondary View</h1>
				}
			})()}
		</>
	)
}
