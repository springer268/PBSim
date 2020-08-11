/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Teambuilder from '../../../interfaces/Teambuilder'
import { TeamCard } from '../ui'
import { ViewPrimary } from '../views'
import { useRecoilState as useRecoil } from 'recoil'
import atoms from '../atoms'

interface Props {
	team: Teambuilder.Team
}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoil(atoms.currentView)
	const [teams, setTeams] = useRecoil(atoms.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoil(atoms.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoil(atoms.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoil(atoms.allPokemon)
	const [allMoves, setAllMoves] = useRecoil(atoms.allMoves)

	const { team } = props

	return (
		<TeamCard key={team.id}>
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

			{team.pokemon.length > 0 ? (
				<ul>
					{team.pokemon.map(pokemon => {
						const abstractPokemon = allPokemon.get(pokemon.name) as Teambuilder.Pokemon.Abstract

						return (
							<li
								onClick={() => {
									setCurrentTeamID(team.id)
									setCurrentPokemonIndex(pokemon.index)
									setCurrentView(ViewPrimary.EditPokemon)
								}}
								key={pokemon.index}
							>
								<img src={abstractPokemon.sprite} alt={pokemon.name} />
								<p>{pokemon.name}</p>
							</li>
						)
					})}
				</ul>
			) : (
				<p className='fallback'>This team has no Pokemon!</p>
			)}
		</TeamCard>
	)
}
