import React from 'react'
import atoms from 'atoms'
import styled from 'styled-components'
import { useRecoilState as useRecoil } from 'recoil'
import Teambuilder from 'interfaces/Teambuilder'
import { ViewPrimary } from 'pages/Teambuilder/views'
import { abstractToDefaultConcrete } from 'pages/Teambuilder/util'

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

interface Props {
	pokemon: Teambuilder.Pokemon.Abstract
}

export default (props: Props) => {
	const [, setCurrentView] = useRecoil(atoms.currentView)
	const [teams, setTeams] = useRecoil(atoms.teams)
	const [currentTeamID] = useRecoil(atoms.currentTeamID)
	const [, setCurrentPokemonIndex] = useRecoil(atoms.currentPokemonIndex)

	const currentTeam = teams.find(team => team.id === currentTeamID) as Teambuilder.Team

	const { pokemon } = props

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
		<PokemonItem
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
		</PokemonItem>
	)
}
