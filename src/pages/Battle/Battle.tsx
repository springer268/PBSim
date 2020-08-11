import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import { Wrapper, Heading, Select, Button, StyledLink } from '../../ui'
import { useRecoilState as useRecoil } from 'recoil'
import atoms from '../Teambuilder/atoms'
import TeamCard from '../../components/TeamCard'
import Teambuilder from '../../interfaces/Teambuilder'
import SideNav from '../../components/SideNav'
import { Grid } from '../../ui'
import styled from 'styled-components'

interface Props {}

export default (props: Props) => {
	const [teams, setTeams] = useRecoil(atoms.teams)
	const [selectedTeamID, setSelectedTeamID] = useState<number>(0)

	return (
		<>
			<Navbar />
			<Grid>
				<SideNav />
				<div>
					<Wrapper>
						<StyledLink to='/'>
							<Button style={{ marginTop: '15px' }}>Back</Button>
						</StyledLink>
						<Heading>Pick a team</Heading>
						<Button style={{ display: 'block', margin: '15px 0' }}>Search for games</Button>
						<Select
							style={{ margin: '0 0 15px 0' }}
							onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
								setSelectedTeamID(Number.parseInt(e.target.value))
							}
						>
							{teams.map(team => (
								<option value={team.id}>{team.name}</option>
							))}
						</Select>
						<TeamCard team={teams.find(team => team.id === selectedTeamID) as Teambuilder.Team} />
					</Wrapper>
				</div>
			</Grid>
		</>
	)
}
