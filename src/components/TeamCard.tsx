/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { Teambuilder } from '../interfaces'
import { TeamCard } from '../ui'
import { View } from '../pages/Teambuilder/Teambuilder'
import { useRecoilState } from 'recoil'
import Atom from '../atoms'

interface Props {
	team: Teambuilder.Team
}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoilState(Atom.Teambuilder.currentView)
	const [teams, setTeams] = useRecoilState(Atom.Teambuilder.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoilState(Atom.Teambuilder.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoilState(Atom.Teambuilder.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoilState(Atom.Teambuilder.allPokemon)
	const [allMoves, setAllMoves] = useRecoilState(Atom.Teambuilder.allMoves)

	const { team } = props

	return (
		<TeamCard key={Math.random()}>
			<h2
				onClick={() => {
					setCurrentTeamID(team.id)
					setCurrentView(View.Team)
				}}
			>
				{team.name}
			</h2>
			<ul>
				{team.pokemon.map(pokemon => (
					<li
						onClick={() => {
							setCurrentTeamID(team.id)
							setCurrentPokemonIndex(pokemon.index)
							setCurrentView(View.EditPokemon)
						}}
						key={Math.random()}
					>
						<img src={pokemon.sprite} alt={pokemon.name} />
						<p>{pokemon.name}</p>
					</li>
				))}
			</ul>
		</TeamCard>
	)
}
