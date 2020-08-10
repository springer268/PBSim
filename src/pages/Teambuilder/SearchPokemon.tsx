import React from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import { View } from './Teambuilder'
import * as Atom from '../../atoms'
import { Teambuilder } from '../../interfaces'
import CurrentTeamNav from './CurrentTeamNav'
import Navbar from './NavbarPrimary'
import styled from 'styled-components'

const PokemonItem = styled.div`
	display: flex;
	padding: 10px;
	border: solid 1px #ddd;
	cursor: pointer;

	img {
		width: 70px;
		margin: auto 0;
	}

	p {
		text-transform: capitalize;
		margin: auto 0 auto 15px;
	}
`

interface Props {}

export default (props: Props) => {
	const setView = useSetRecoilState(Atom.viewCurrentView)
	const [teams, setTeams] = useRecoilState(Atom.viewTeams)
	const [currentTeamID, setCurrentTeamID] = useRecoilState(Atom.viewCurrentTeamID)
	const searchPokemon = useRecoilValue(Atom.viewSearchPokemon)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoilState(Atom.viewCurrentPokemonIndex)

	const currentTeam = teams.filter(team => team.id === currentTeamID)[0]

	const setCurrentTeam = (newTeam: Teambuilder.Team) => {
		setTeams(teams => {
			const val = teams.map(team => {
				if (team.id === newTeam.id) {
					return newTeam
				} else {
					return team
				}
			})

			localStorage.setItem('teams', JSON.stringify(val))

			return val
		})
	}

	return (
		<>
			<Navbar />
			<CurrentTeamNav>
				<button onClick={() => setView(View.Team)}>Back</button>
			</CurrentTeamNav>
			{searchPokemon.map(pokemon => {
				return (
					<PokemonItem
						key={pokemon.id}
						onClick={() => {
							setCurrentTeam({
								...currentTeam,
								pokemon: [...currentTeam.pokemon, { ...pokemon, index: currentTeam.pokemon.length }]
							})
							setCurrentPokemonIndex(currentTeam.pokemon.length)
							setView(View.EditPokemon)
						}}
					>
						<img src={pokemon.sprite} alt={pokemon.name} />
						<p>{pokemon.name}</p>
					</PokemonItem>
				)
			})}
		</>
	)
}
