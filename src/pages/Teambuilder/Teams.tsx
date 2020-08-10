import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import * as Atom from '../../atoms'
import { View } from './Teambuilder'
import Navbar from './NavbarPrimary'
import { Wrapper } from '../../ui'
import styled from 'styled-components'

const TeamCard = styled.div`
	border: solid 1px #ddd;
	display: flex;
	flex-direction: column;

	h2 {
		margin: 10px 15px;

		&:hover {
			cursor: pointer;
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
`

const Button = styled.button`
	background: linear-gradient(-135deg, #02e6ee, #1f3cce);
	border: none;
	padding: 5px 10px;
	color: white;
	font-weight: 500;
	outline: none;
	cursor: pointer;
	margin-bottom: 15px;
`

const Heading = styled.h1`
	font-size: 38px;
	margin: 10px 0;
`

interface Props {}

export default (props: Props) => {
	const setView = useSetRecoilState(Atom.viewCurrentView)
	const [teams, setTeams] = useRecoilState(Atom.viewTeams)
	const setCurrentTeamID = useSetRecoilState(Atom.viewCurrentTeamID)
	const setCurrentPokemonIndex = useSetRecoilState(Atom.viewCurrentPokemonIndex)

	return (
		<>
			<Navbar />
			<Wrapper>
				<Heading>All Teams</Heading>
				<Button
					onClick={() => {
						setTeams(teams => {
							const val = [
								{
									name: prompt('Enter a team name') as string,
									pokemon: [],
									id: teams.length
								},
								...teams
							]

							localStorage.setItem('teams', JSON.stringify(val))

							return val
						})
					}}
				>
					Add new team
				</Button>
				{teams.map(team => {
					return (
						<TeamCard key={Math.random()}>
							<h2
								onClick={() => {
									setCurrentTeamID(team.id)
									setView(View.Team)
								}}
							>
								{team.name}
							</h2>
							<ul>
								{team.pokemon.map(pokemon => (
									<li
										onClick={() => {
											setCurrentTeamID(team.id)
											setCurrentPokemonIndex(pokemon.index as number)
											setView(View.EditPokemon)
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
				})}
			</Wrapper>
		</>
	)
}
