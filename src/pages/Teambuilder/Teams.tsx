import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import * as Atom from '../../atoms'
import { View } from './Teambuilder'

interface Props {}

export default (props: Props) => {
	const setView = useSetRecoilState(Atom.viewCurrentView)
	const [teams, setTeams] = useRecoilState(Atom.viewTeams)
	const setCurrentTeam = useSetRecoilState(Atom.viewCurrentTeamID)

	return (
		<>
			<h1>All Teams</h1>
			<button
				onClick={() => {
					setTeams(teams => [
						{
							name: '' + Math.random(),
							pokemon: [],
							id: teams.length
						},
						...teams
					])
				}}
			>
				Add new team
			</button>
			{teams.map(team => {
				return (
					<div
						onClick={() => {
							setCurrentTeam(team.id)
							setView(View.Team)
						}}
						key={Math.random()}
					>
						<h2>{team.name}</h2>
						<ul>
							{team.pokemon.map(pokemon => (
								<li key={Math.random()}>{pokemon.name}</li>
							))}
						</ul>
					</div>
				)
			})}
		</>
	)
}
