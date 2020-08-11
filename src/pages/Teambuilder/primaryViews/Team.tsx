/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import { ViewPrimary } from '../Teambuilder'
import atoms from '../../../atoms'
import { Wrapper } from '../../../ui'
import PokemonStage from '../../../components/PokemonStage'
import { Button } from '../../../ui'

interface Props {}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoil(atoms.tb.currentView)
	const [teams, setTeams] = useRecoil(atoms.tb.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoil(atoms.tb.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoil(atoms.tb.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoil(atoms.tb.allPokemon)
	const [allMoves, setAllMoves] = useRecoil(atoms.tb.allMoves)

	const currentTeam = teams.filter(team => team.id === currentTeamID)[0]

	return (
		<>
			<Wrapper>
				<Button
					style={{ margin: '15px 0 5px 0' }}
					onClick={() => {
						setCurrentView(ViewPrimary.Teams)
					}}
				>
					Back
				</Button>
				<h1 style={{ fontSize: '38px' }}>{currentTeam.name}</h1>
				<Button style={{ margin: '10px 0 20px 0' }} onClick={() => setCurrentView(ViewPrimary.SearchPokemon)}>
					Add new Pokemon
				</Button>
				{currentTeam.pokemon.length > 0 ? (
					currentTeam.pokemon.map(pokemon => {
						return (
							<div
								style={{ cursor: 'pointer' }}
								onClick={() => {
									setCurrentPokemonIndex(pokemon.index)
									setCurrentView(ViewPrimary.EditPokemon)
								}}
							>
								<PokemonStage pokemon={pokemon} />
							</div>
						)
					})
				) : (
					<p>This team has no Pokemon!</p>
				)}
			</Wrapper>
		</>
	)
}
