import React, { FC } from 'react'
import { useAll } from 'hooks'
import styled from 'styled-components'
import Teambuilder from 'interfaces/Teambuilder'
import { ViewPrimary } from 'pages/Teambuilder/views'
import { abstractToDefaultConcrete } from 'pages/Teambuilder/util'

const PokemonItemUI = styled.div`
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

interface Props {
	pokemon: Teambuilder.Pokemon.Abstract
}

const PokemonItem: FC<Props> = ({ children, pokemon }): JSX.Element => {
	const { setCurrentView, teams, setTeams, currentTeamID, setCurrentPokemonIndex } = useAll()

	const currentTeam = teams.find(team => team.id === currentTeamID) as Teambuilder.Team

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
		<PokemonItemUI
			key={pokemon.id}
			onClick={() => {
				setCurrentTeam({
					...currentTeam,
					pokemon: [...currentTeam.pokemon, abstractToDefaultConcrete(pokemon, currentTeam.pokemon.length)]
				})
				setCurrentPokemonIndex(currentTeam.pokemon.length)
				setCurrentView(ViewPrimary.EditPokemon)
			}}
		>
			<img src={pokemon.sprite} alt={pokemon.name} />
			<p>{pokemon.name}</p>
		</PokemonItemUI>
	)
}

export default PokemonItem
