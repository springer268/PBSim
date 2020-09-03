/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Teambuilder from '../interfaces/Teambuilder'
import styled from 'styled-components'
import { ViewPrimary } from '../pages/Teambuilder/views'
import { useRecoilState as useRecoil } from 'recoil'
import atoms from '../atoms'
import { StyledLink } from '../ui'

const TeamCard = styled.div`
	border: solid 1px #ddd;
	display: flex;
	flex-direction: column;
	color: black;

	.top {
		display: flex;
		justify-content: space-between;

		h2 {
			&:hover {
				cursor: pointer;
			}
		}

		.icons {
			display: flex;

			i {
				margin: auto 15px auto 0;
				cursor: pointer;
			}
		}
	}

	ul {
		list-style: none;
		display: flex;

		li {
			padding: 10px;
			text-align: center;
			text-transform: capitalize;

			&:hover {
				cursor: pointer;
			}
		}
	}

	p.fallback {
		margin: 0px 0px 15px 15px;
	}
`

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
		<StyledLink to='/teambuilder'>
			<TeamCard key={team.id}>
				<div className='top'>
					<h2
						style={{ margin: '15px 0 0 15px' }}
						onClick={() => {
							setCurrentTeamID(team.id)
							setCurrentView(ViewPrimary.Team)
						}}
					>
						{team.name}
					</h2>
					<div className='icons'>
						<i
							title={`Add member to ${team.name}`}
							className='fa fa-plus'
							onClick={() => {
								setCurrentTeamID(team.id)
								setCurrentView(ViewPrimary.SearchPokemon)
							}}
						></i>
						<i
							title={`Delete ${team.name}`}
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
								</li>
							)
						})}
					</ul>
				) : (
					<p className='fallback'>This team has no Pokemon!</p>
				)}
			</TeamCard>
		</StyledLink>
	)
}
