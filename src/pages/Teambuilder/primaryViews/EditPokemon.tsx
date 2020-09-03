import React, { FC } from 'react'
import { useAll } from 'hooks'
import { CurrentTeamNav, PokemonStage } from 'components'
import { Button } from 'ui'
import Teambuilder from 'interfaces/Teambuilder'
import { SelectPokemon, SelectMove } from './secondaryViews'
import { ViewPrimary, ViewSecondary } from '../views'

interface Props {}

const EditPokemon: FC<Props> = ({ children }): JSX.Element => {
	const { setCurrentView, teams, currentTeamID, currentPokemonIndex, currentViewSecondary } = useAll()

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
						return <SelectPokemon />
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

export default EditPokemon
