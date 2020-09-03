import React from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import { CurrentTeamNav, PokemonStage } from 'components'
import { Button } from 'ui'
import Teambuilder from 'interfaces/Teambuilder'
import atoms from 'atoms'
import { SearchPokemon, SelectMove } from './secondaryViews'
import { ViewPrimary, ViewSecondary } from '../views'

interface Props {}

export default (props: Props) => {
	const [, setCurrentView] = useRecoil(atoms.currentView)
	const [teams] = useRecoil(atoms.teams)
	const [currentTeamID] = useRecoil(atoms.currentTeamID)
	const [currentPokemonIndex] = useRecoil(atoms.currentPokemonIndex)
	const [currentViewSecondary] = useRecoil(atoms.currentViewSecondary)

	const currentTeam = teams.find(team => team.id === currentTeamID) as Teambuilder.Team

	const currentPokemon = currentTeam.pokemon.find(
		pokemon => pokemon.index === currentPokemonIndex
	) as Teambuilder.Pokemon.Concrete

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
