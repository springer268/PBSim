/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import { ViewPrimary } from '../Teambuilder'
import atoms from '../../../atoms'
import { Teambuilder } from '../../../interfaces'
import CurrentTeamNav from '../../../components/CurrentTeamNav'
import PokemonStage from '../../../components/PokemonStage'
import { Button } from '../../../ui'
import SearchPokemon from './secondaryViews/SearchPokemon'
import SelectMove from './secondaryViews/SelectMove'

export enum ViewSecondary {
	Nothing,
	Moves,
	Pokemon,
	Stats,
	Items,
	Abilities,
	Misc
}

interface Props {}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoil(atoms.tb.currentView)
	const [teams, setTeams] = useRecoil(atoms.tb.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoil(atoms.tb.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoil(atoms.tb.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoil(atoms.tb.allPokemon)
	const [allMoves, setAllMoves] = useRecoil(atoms.tb.allMoves)

	const [currentViewSecondary, setCurrentViewSecondary] = useRecoil(atoms.tb.currentViewSecondary)

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
						return <h1>Big fat problem in Edit Pokemon</h1>
				}
			})()}
		</>
	)
}
