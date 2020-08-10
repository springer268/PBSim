import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import * as Atom from '../../atoms'
import { View } from './Teambuilder'
import Navbar from './NavbarPrimary'
import { Wrapper } from '../../ui'
import { Button } from '../../ui'
import { TeamCard, Heading } from '../../ui'

interface Props {}

export default (props: Props) => {
	const setView = useSetRecoilState(Atom.viewCurrentView)
	const [teams, setTeams] = useRecoilState(Atom.viewTeams)
	const setCurrentTeamID = useSetRecoilState(Atom.viewCurrentTeamID)
	const setCurrentPokemonIndex = useSetRecoilState(Atom.viewCurrentPokemonIndex)

	return (
		<>
			<Navbar />
			<Wrapper>
				<Heading>All Teams</Heading>
				<Button
					style={{ marginBottom: '15px' }}
					onClick={() => {
						setTeams(teams => {
							const val = [
								{
									name: prompt('Enter a team name') as string,
									pokemon: [],
									id: teams.length
								},
								...teams
							]

							localStorage.setItem('teams', JSON.stringify(val))

							return val
						})
					}}
				>
					Add new team
				</Button>
				{teams.map(team => {
					return (
						<TeamCard key={Math.random()}>
							<h2
								onClick={() => {
									setCurrentTeamID(team.id)
									setView(View.Team)
								}}
							>
								{team.name}
							</h2>
							<ul>
								{team.pokemon.map(pokemon => (
									<li
										onClick={() => {
											setCurrentTeamID(team.id)
											setCurrentPokemonIndex(pokemon.index)
											setView(View.EditPokemon)
										}}
										key={Math.random()}
									>
										<img src={pokemon.sprite} alt={pokemon.name} />
										<p>{pokemon.name}</p>
									</li>
								))}
							</ul>
						</TeamCard>
					)
				})}
			</Wrapper>
		</>
	)
}
