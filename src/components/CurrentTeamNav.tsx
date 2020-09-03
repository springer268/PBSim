import React from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import { ViewPrimary } from 'pages/Teambuilder/views'
import Teambuilder from 'interfaces/Teambuilder'
import atoms from 'atoms'
import styled from 'styled-components'

const CurrentTeamNav = styled.nav`
	display: flex;
	border-bottom: solid 1px #ddd;
	height: 90px;

	button {
		margin: auto 25px;
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
	const [, setCurrentView] = useRecoil(atoms.currentView)
	const [teams] = useRecoil(atoms.teams)
	const [currentTeamID] = useRecoil(atoms.currentTeamID)
	const [, setCurrentPokemonIndex] = useRecoil(atoms.currentPokemonIndex)
	const [allPokemon] = useRecoil(atoms.allPokemon)

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
				{currentTeam.pokemon.length < 6 ? (
					<li
						onClick={() => {
							setCurrentView(ViewPrimary.SearchPokemon)
						}}
					>
						<i className='fa fa-plus'></i>
					</li>
				) : (
					<></>
				)}
			</ul>
		</CurrentTeamNav>
	)
}
