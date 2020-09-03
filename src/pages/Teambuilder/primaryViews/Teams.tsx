/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import { Button, Wrapper, Heading, StyledLink } from '../../../ui'
import atoms from '../../../atoms'
import TeamCard from '../../../components/TeamCard'

interface Props {}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoil(atoms.currentView)
	const [teams, setTeams] = useRecoil(atoms.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoil(atoms.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoil(atoms.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoil(atoms.allPokemon)
	const [allMoves, setAllMoves] = useRecoil(atoms.allMoves)

	return (
		<>
			<Wrapper>
				<StyledLink to='/'>
					<Button style={{ marginTop: '15px' }}>Back</Button>
				</StyledLink>
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
				<div style={{ marginBottom: '20px' }}>
					{teams.length > 0 && allPokemon.size > 0 ? (
						teams.map(team => <TeamCard team={team} key={team.id} />)
					) : (
						<p>You have no teams!</p>
					)}
				</div>
			</Wrapper>
		</>
	)
}
