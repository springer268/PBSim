import React, { FC } from 'react'
import { useAll } from 'hooks'
import { Button, Wrapper, Heading, StyledLink } from 'ui'
import { TeamCard } from 'components'

interface Props {}

const Teams: FC<Props> = ({ children }): JSX.Element => {
	const { teams, setTeams, allPokemon } = useAll()

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

export default Teams
