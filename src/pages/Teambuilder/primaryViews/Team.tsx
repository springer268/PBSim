import React, { FC } from 'react'
import { useAll } from 'hooks'
import { PokemonStage } from 'components'
import { Wrapper, Button, Heading } from 'ui'
import Teambuilder from 'interfaces/Teambuilder'
import { ViewPrimary } from '../views'

interface Props {}

const Team: FC<Props> = ({ children }): JSX.Element => {
	const { setCurrentView, teams, currentTeamID, setCurrentPokemonIndex } = useAll()

	const currentTeam = teams.find(team => team.id === currentTeamID) as Teambuilder.Team

	return (
		<>
			<Wrapper>
				<Button onClick={() => setCurrentView(ViewPrimary.Teams)}>Back</Button>
				<Heading>{currentTeam.name}</Heading>
				{currentTeam.pokemon.length < 6 ? (
					<Button onClick={() => setCurrentView(ViewPrimary.SearchPokemon)}>Add new Pokemon</Button>
				) : (
					<></>
				)}
				<div style={{ marginBottom: '20px' }}>
					{currentTeam.pokemon.length > 0 ? (
						currentTeam.pokemon.map(pokemon => (
							<div
								style={{ cursor: 'pointer' }}
								onClick={() => {
									setCurrentPokemonIndex(pokemon.index)
									setCurrentView(ViewPrimary.EditPokemon)
								}}
							>
								<PokemonStage pokemon={pokemon} />
							</div>
						))
					) : (
						<p>This team has no Pokemon!</p>
					)}
				</div>
			</Wrapper>
		</>
	)
}

export default Team
