/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Teambuilder } from '../interfaces'
import { TeamCard } from '../ui'
import { ViewPrimary } from '../pages/Teambuilder/Teambuilder'
import { useRecoilState as useRecoil } from 'recoil'
import atoms from '../atoms'

interface Props {
	team: Teambuilder.Team
}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoil(atoms.tb.currentView)
	const [teams, setTeams] = useRecoil(atoms.tb.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoil(atoms.tb.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoil(atoms.tb.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoil(atoms.tb.allPokemon)
	const [allMoves, setAllMoves] = useRecoil(atoms.tb.allMoves)

	const { team } = props

	return (
		<TeamCard key={Math.random()}>
			<div className='top'>
				<h2
					onClick={() => {
						setCurrentTeamID(team.id)
						setCurrentView(ViewPrimary.Team)
					}}
				>
					{team.name}
				</h2>
				<i
					title={`Delete team ${team.name}`}
					className='fa fa-trash'
					onClick={() => {
						setTeams(teams => {
							const val = teams.filter(team2 => team2.id !== team.id)
							localStorage.setItem('teams', JSON.stringify(val))
							return val
						})
					}}
				></i>
			</div>
			<ul>
				{team.pokemon.length > 0 ? (
					team.pokemon.map(pokemon => (
						<li
							onClick={() => {
								setCurrentTeamID(team.id)
								setCurrentPokemonIndex(pokemon.index)
								setCurrentView(ViewPrimary.EditPokemon)
							}}
							key={Math.random()}
						>
							<img src={pokemon.sprite} alt={pokemon.name} />
							<p>{pokemon.name}</p>
						</li>
					))
				) : (
					<p className='fallback'>This team has no Pokemon!</p>
				)}
			</ul>
		</TeamCard>
	)
}
