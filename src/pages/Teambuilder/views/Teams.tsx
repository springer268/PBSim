/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useRecoilState } from 'recoil'
import { View } from '../Teambuilder'
import Navbar from '../../../components/Navbar'
import { Wrapper } from '../../../ui'
import { Button } from '../../../ui'
import { Heading } from '../../../ui'
import Atom from '../../../atoms'
import TeamCard from '../../../components/TeamCard'

interface Props {}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoilState(Atom.Teambuilder.currentView)
	const [teams, setTeams] = useRecoilState(Atom.Teambuilder.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoilState(Atom.Teambuilder.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoilState(Atom.Teambuilder.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoilState(Atom.Teambuilder.allPokemon)
	const [allMoves, setAllMoves] = useRecoilState(Atom.Teambuilder.allMoves)

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
				{teams.map(team => (
					<TeamCard team={team} key={Math.random()} />
				))}
			</Wrapper>
		</>
	)
}
