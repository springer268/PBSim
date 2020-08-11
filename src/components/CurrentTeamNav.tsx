/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import { ViewPrimary } from '../pages/Teambuilder/Teambuilder'
import atoms from '../atoms'
import { CurrentTeamNav } from '../ui'

interface Props {
	children?: React.ReactNode
}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoil(atoms.tb.currentView)
	const [teams, setTeams] = useRecoil(atoms.tb.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoil(atoms.tb.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoil(atoms.tb.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoil(atoms.tb.allPokemon)
	const [allMoves, setAllMoves] = useRecoil(atoms.tb.allMoves)
	const [currentViewSecondary, setCurrentViewSecondary] = useRecoil(atoms.tb.currentViewSecondary)

	const currentTeam = teams.filter(team => team.id === currentTeamID)[0]

	return (
		<CurrentTeamNav>
			{props.children}
			<ul>
				{currentTeam.pokemon.map(pokemon => {
					return (
						<li
							key={pokemon.index}
							onClick={() => {
								setCurrentPokemonIndex(pokemon.index)
								setCurrentView(ViewPrimary.EditPokemon)
							}}
						>
							<img src={pokemon.sprite} alt={pokemon.name} />
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
