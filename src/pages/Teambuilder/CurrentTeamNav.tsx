import React from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import { View } from './Teambuilder'
import * as Atom from '../../atoms'
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
	const setView = useSetRecoilState(Atom.viewCurrentView)
	const [teams, setTeams] = useRecoilState(Atom.viewTeams)
	const [currentTeamID, setCurrentTeamID] = useRecoilState(Atom.viewCurrentTeamID)
	const searchPokemon = useRecoilValue(Atom.viewSearchPokemon)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoilState(Atom.viewCurrentPokemonIndex)

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
								setView(View.EditPokemon)
							}}
						>
							<img src={pokemon.sprite} alt={pokemon.name} />
							<p>{pokemon.name}</p>
						</li>
					)
				})}
				<li onClick={() => setView(View.SearchPokemon)}>
					<i className='fa fa-plus'></i>
				</li>
			</ul>
		</Navbar>
	)
}
