/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useRecoilState } from 'recoil'
import { View } from '../Teambuilder'
import Atom from '../../../atoms'
import Navbar from '../../../components/Navbar'
import { Wrapper } from '../../../ui'
import PokemonStage from '../../../components/PokemonStage'
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

	return (
		<>
			<Navbar />
			<Wrapper>
				<Button
					style={{ margin: '10px 0' }}
					onClick={() => {
						setCurrentView(View.Teams)
					}}
				>
					Back
				</Button>
				<h1 style={{ fontSize: '38px' }}>{currentTeam.name}</h1>
				<Button style={{ margin: '10px 0' }} onClick={() => setCurrentView(View.SearchPokemon)}>
					Add new Pokemon
				</Button>
				{currentTeam.pokemon.map(pokemon => {
					return (
						<div
							style={{ cursor: 'pointer' }}
							onClick={() => {
								setCurrentPokemonIndex(pokemon.index)
								setCurrentView(View.EditPokemon)
							}}
						>
							<PokemonStage pokemon={pokemon} />
						</div>
					)
				})}
			</Wrapper>
		</>
	)
}
