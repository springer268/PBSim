import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { View } from './Teambuilder'
import * as Atom from '../../atoms'
import Navbar from './NavbarPrimary'
import { Wrapper } from '../../ui'
import PokemonStage from './PokemonStage'
import styled from 'styled-components'

const Button = styled.button`
	background: linear-gradient(-135deg, #02e6ee, #1f3cce);
	border: none;
	padding: 5px 10px;
	color: white;
	font-weight: 500;
	outline: none;
	cursor: pointer;
	margin: 10px 0;
`

interface Props {}

export default (props: Props) => {
	const teams = useRecoilValue(Atom.viewTeams)
	const setView = useSetRecoilState(Atom.viewCurrentView)
	const currentTeamID = useRecoilValue(Atom.viewCurrentTeamID)
	const setCurrentPokemonIndex = useSetRecoilState(Atom.viewCurrentPokemonIndex)

	const currentTeam = teams.filter(team => team.id === currentTeamID)[0]

	return (
		<>
			<Navbar />
			<Wrapper>
				<Button
					onClick={() => {
						setView(View.Teams)
					}}
				>
					Back
				</Button>
				<h1 style={{ fontSize: '38px' }}>{currentTeam.name}</h1>
				<Button onClick={() => setView(View.SearchPokemon)}>Add new Pokemon</Button>
				{currentTeam.pokemon.map(pokemon => {
					return (
						<div
							style={{ cursor: 'pointer' }}
							onClick={() => {
								setCurrentPokemonIndex(pokemon.index as number)
								setView(View.EditPokemon)
							}}
						>
							<PokemonStage pokemon={pokemon} />
						</div>
					)
				})}
			</Wrapper>
		</>
	)
}
