import React from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import { PokemonStage } from 'components'
import { Wrapper, Button, Heading } from 'ui'
import Teambuilder from 'interfaces/Teambuilder'
import atoms from 'atoms'
import { ViewPrimary } from '../views'

interface Props {}

export default (props: Props) => {
	const [, setCurrentView] = useRecoil(atoms.currentView)
	const [teams] = useRecoil(atoms.teams)
	const [currentTeamID] = useRecoil(atoms.currentTeamID)
	const [, setCurrentPokemonIndex] = useRecoil(atoms.currentPokemonIndex)

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
