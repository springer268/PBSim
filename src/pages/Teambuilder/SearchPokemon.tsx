import React, { useState } from 'react'
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil'
import { View } from './Teambuilder'
import * as Atom from '../../atoms'
import { Teambuilder } from '../../interfaces'
import CurrentTeamNav from './CurrentTeamNav'
import Navbar from './NavbarPrimary'
import styled from 'styled-components'
import { abstractToDefaultConcrete } from '../../util'
import { PokemonItem, Searchbar } from '../../ui'

interface Props {}

export default (props: Props) => {
	const setView = useSetRecoilState(Atom.viewCurrentView)
	const [teams, setTeams] = useRecoilState(Atom.viewTeams)
	const [currentTeamID, setCurrentTeamID] = useRecoilState(Atom.viewCurrentTeamID)
	const searchPokemon = useRecoilValue(Atom.viewSearchPokemon)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoilState(Atom.viewCurrentPokemonIndex)
	const [input, setInput] = useState<string>('')

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
			<div style={{ position: 'sticky', top: '0', zIndex: 10 }}>
				<Navbar />
				<CurrentTeamNav>
					<button onClick={() => setView(View.Team)}>Back</button>
				</CurrentTeamNav>
			</div>
			<Searchbar
				type='text'
				placeholder='Search for a Pokemon'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setInput(e.target.value)
				}}
			/>
			<div style={{ zIndex: 11 }}>
				{searchPokemon.map(pokemon => {
					if (pokemon.name.includes(input.toLowerCase())) {
						return (
							<PokemonItem
								key={pokemon.id}
								onClick={() => {
									setCurrentTeam({
										...currentTeam,
										pokemon: [
											...currentTeam.pokemon,
											abstractToDefaultConcrete(pokemon, currentTeam.pokemon.length)
										]
									})
									setCurrentPokemonIndex(currentTeam.pokemon.length)
									setView(View.EditPokemon)
								}}
							>
								<img src={pokemon.sprite} alt={pokemon.name} />
								<p>{pokemon.name}</p>
							</PokemonItem>
						)
					} else {
						return <></>
					}
				})}
			</div>
		</>
	)
}
