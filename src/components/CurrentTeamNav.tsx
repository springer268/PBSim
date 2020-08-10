/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useRecoilState } from 'recoil'
import { View } from '../pages/Teambuilder/Teambuilder'
import Atom from '../atoms'
import styled from 'styled-components'

const Navbar = styled.nav`
	display: flex;
	border-bottom: solid 1px #ddd;

	button {
		margin: auto 15px;
	}

	ul {
		display: flex;
		list-style: none;

		li {
			display: flex;
			flex-direction: column;
			padding: 5px 10px;
			border-left: solid #ccc 1px;
			cursor: pointer;

			&:nth-last-of-type(1) {
				border-right: solid #ccc 1px;
				width: 85px;

				i {
					margin: auto;
					transform: scale(1.1);
				}
			}

			img {
				margin: auto;
				width: 50px;
			}

			p {
				text-transform: capitalize;
				text-align: center;
			}
		}
	}
`

interface Props {
	children?: React.ReactNode
}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoilState(Atom.Teambuilder.currentView)
	const [teams, setTeams] = useRecoilState(Atom.Teambuilder.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoilState(Atom.Teambuilder.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoilState(Atom.Teambuilder.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoilState(Atom.Teambuilder.allPokemon)
	const [allMoves, setAllMoves] = useRecoilState(Atom.Teambuilder.allMoves)

	const currentTeam = teams.filter(team => team.id === currentTeamID)[0]

	return (
		<Navbar>
			{props.children}
			<ul>
				{currentTeam.pokemon.map(pokemon => {
					return (
						<li
							key={pokemon.index}
							onClick={() => {
								setCurrentPokemonIndex(pokemon.index)
								setCurrentView(View.EditPokemon)
							}}
						>
							<img src={pokemon.sprite} alt={pokemon.name} />
							<p>{pokemon.name}</p>
						</li>
					)
				})}
				<li onClick={() => setCurrentView(View.SearchPokemon)}>
					<i className='fa fa-plus'></i>
				</li>
			</ul>
		</Navbar>
	)
}
