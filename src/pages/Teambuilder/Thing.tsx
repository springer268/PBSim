import React, { useState } from 'react'

interface Member {
	name: string
}

interface Team {
	name: string
	members: Member[]
}

export default (props: {}) => {
	const [teams, setTeams] = useState<Team[]>([
		{
			name: 'Team One',
			members: [{ name: 'Wyatt' }, { name: 'Michael' }]
		}
	])
	const [currentTeam, setCurrentTeam] = useState<Team>(teams[0])
	const [currentMember, setCurrentMember] = useState<Member>(currentTeam.members[0])

	return (
		<>
			<h1>${currentMember.name}</h1>
			<button onClick={() => setCurrentMember({ ...currentMember, name: 'Zach' })}>
				Change current member name to Zach!
			</button>
		</>
	)
}
