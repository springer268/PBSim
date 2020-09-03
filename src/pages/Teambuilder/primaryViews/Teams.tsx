import React from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import { Button, Wrapper, Heading, StyledLink } from 'ui'
import { TeamCard } from 'components'
import atoms from 'atoms'

interface Props {}

export default (props: Props) => {
	const [teams, setTeams] = useRecoil(atoms.teams)
	const [allPokemon] = useRecoil(atoms.allPokemon)

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
