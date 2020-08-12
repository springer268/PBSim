import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { Wrapper, Heading, Select, Button, StyledLink } from '../../ui'
import { useRecoilState as useRecoil } from 'recoil'
import atoms from '../Teambuilder/atoms'
import TeamCard from '../../components/TeamCard'
import Teambuilder from '../../interfaces/Teambuilder'
import SideNav from '../../components/SideNav'
import { Grid } from '../../ui'

interface Props {}

export default (props: Props) => {
	const [teams, setTeams] = useRecoil(atoms.teams)
	const [selectedTeamID, setSelectedTeamID] = useState<number>(
		teams.map(team => team.id).reduce((max, cur) => (cur > max ? cur : max), 0)
	)

	return (
		<>
			<Navbar />
			<Grid>
				<SideNav />
				<div>
					<Wrapper>
						<StyledLink to='/'>
							<Button>Back</Button>
						</StyledLink>
						{teams.length > 0 ? (
							<>
								<Heading>Pick a team</Heading>
								<Button>Search for games</Button>
								{teams.length > 1 ? (
									<Select
										marginless
										onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
											setSelectedTeamID(Number.parseInt(e.target.value))
										}
									>
										{teams.map(team => (
											<option value={team.id}>{team.name}</option>
										))}
									</Select>
								) : (
									<></>
								)}
								<div style={{ marginTop: '15px' }}>
									<TeamCard
										team={teams.find(team => team.id === selectedTeamID) as Teambuilder.Team}
									/>
								</div>
							</>
						) : (
							<>
								<Heading>You have no teams!</Heading>
								<StyledLink to='/teambuilder'>
									<Button>Make some here!</Button>
								</StyledLink>
							</>
						)}
					</Wrapper>
				</div>
			</Grid>
		</>
	)
}
