/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import { ViewPrimary } from '../views'
import atoms from '../atoms'
import PokemonStage from '../components/PokemonStage'
import { Wrapper, Button, Heading } from '../../../ui'
import Teambuilder from '../../../interfaces/Teambuilder'

interface Props {}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoil(atoms.currentView)
	const [teams, setTeams] = useRecoil(atoms.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoil(atoms.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoil(atoms.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoil(atoms.allPokemon)
	const [allMoves, setAllMoves] = useRecoil(atoms.allMoves)

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
