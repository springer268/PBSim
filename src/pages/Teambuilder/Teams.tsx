import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import * as Atom from '../../atoms'
import { View } from './Teambuilder'

interface Props {}

export default (props: Props) => {
	const setView = useSetRecoilState(Atom.viewCurrentView)
	const [teams, setTeams] = useRecoilState(Atom.viewTeams)
	const setCurrentTeam = useSetRecoilState(Atom.viewCurrentTeam)

	return (
		<>
			<h1>All Teams</h1>
			<button
				onClick={() => {
					setTeams(teams => [
						{
							name: prompt('enter a name') as string,
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
							setCurrentTeam(team)
							setView(View.Team)
						}}
						key={Math.random()}
					>
						<p>{team.name}</p>
						<ul>
							{team.pokemon.map(pokemon => (
								<li>{pokemon.name}</li>
							))}
						</ul>
					</div>
				)
			})}
		</>
	)
}
