/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import { Wrapper } from '../../../ui'
import { Button } from '../../../ui'
import { Heading } from '../../../ui'
import atoms from '../../../atoms'
import TeamCard from '../../../components/TeamCard'

interface Props {}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoil(atoms.tb.currentView)
	const [teams, setTeams] = useRecoil(atoms.tb.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoil(atoms.tb.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoil(atoms.tb.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoil(atoms.tb.allPokemon)
	const [allMoves, setAllMoves] = useRecoil(atoms.tb.allMoves)

	return (
		<>
			<Wrapper>
				<Heading>Teambuilder</Heading>
				<Button
					style={{ marginBottom: '15px' }}
					onClick={() => {
						setTeams(teams => {
							const val = [
								{
									name: prompt('Enter a team name') || 'Untitled',
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
				{teams.length > 0 ? (
					teams.map(team => <TeamCard team={team} key={Math.random()} />)
				) : (
					<p>You have no teams!</p>
				)}
			</Wrapper>
		</>
	)
}
