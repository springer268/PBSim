/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import { ViewPrimary } from '../views'
import atoms from '../atoms'
import { Wrapper } from '../ui'
import PokemonStage from '../components/PokemonStage'
import { Button } from '../ui'
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
				<Button style={{ margin: '15px 0 5px 0' }} onClick={() => setCurrentView(ViewPrimary.Teams)}>
					Back
				</Button>
				<h1 style={{ fontSize: '38px' }}>{currentTeam.name}</h1>
				<Button style={{ margin: '10px 0 20px 0' }} onClick={() => setCurrentView(ViewPrimary.SearchPokemon)}>
					Add new Pokemon
				</Button>
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
			</Wrapper>
		</>
	)
}
