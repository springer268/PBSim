/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import { ViewPrimary } from '../views'
import atoms from '../atoms'
import { CurrentTeamNav } from '../ui'
import Teambuilder from '../../../interfaces/Teambuilder'

interface Props {
	children?: React.ReactNode
}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoil(atoms.currentView)
	const [teams, setTeams] = useRecoil(atoms.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoil(atoms.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoil(atoms.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoil(atoms.allPokemon)
	const [allMoves, setAllMoves] = useRecoil(atoms.allMoves)
	const [currentViewSecondary, setCurrentViewSecondary] = useRecoil(atoms.currentViewSecondary)

	const currentTeam = teams.find(team => team.id === currentTeamID) as Teambuilder.Team

	return (
		<CurrentTeamNav>
			{props.children}
			<ul>
				{currentTeam.pokemon.map(pokemon => {
					const abstractPokemon = allPokemon.get(pokemon.name) as Teambuilder.Pokemon.Abstract

					return (
						<li
							key={pokemon.index}
							onClick={() => {
								setCurrentPokemonIndex(pokemon.index)
								setCurrentView(ViewPrimary.EditPokemon)
							}}
						>
							<img src={abstractPokemon.sprite} alt={pokemon.name} />
							<p>{pokemon.name}</p>
						</li>
					)
				})}
				<li
					onClick={() => {
						setCurrentView(ViewPrimary.SearchPokemon)
					}}
				>
					<i className='fa fa-plus'></i>
				</li>
			</ul>
		</CurrentTeamNav>
	)
}
