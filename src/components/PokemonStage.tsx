/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import styled from 'styled-components'
import { Teambuilder } from '../interfaces'
import { ViewPrimary } from '../pages/Teambuilder/Teambuilder'
import { ViewSecondary } from '../pages/Teambuilder/primaryViews/EditPokemon'
import { useRecoilState as useRecoil } from 'recoil'
import atoms from '../atoms'

const PokemonStage = styled.div`
	display: flex;
	height: 155px;
	padding-top: 15px;
	border: solid 1px #ddd;

	div {
		margin-right: 8px;
	}

	.form-control {
		display: flex;
		flex-direction: column;

		label {
			font-weight: 500;
		}

		input {
			margin-top: 3px;
			padding: 1px 3px;
		}
	}

	.pokemon-img {
		margin: -13px 0;
		margin-left: 20px;
		margin-right: 15px;
		display: flex;
		flex-direction: column;
		width: 100px;
		height: 100px;
	}
`

interface Props {
	pokemon: Teambuilder.Pokemon.Concrete
}

export default (props: Props) => {
	const { pokemon } = props
	const [currentView, setCurrentView] = useRecoil(atoms.tb.currentView)
	const [teams, setTeams] = useRecoil(atoms.tb.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoil(atoms.tb.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoil(atoms.tb.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoil(atoms.tb.allPokemon)
	const [allMoves, setAllMoves] = useRecoil(atoms.tb.allMoves)
	const [currentViewSecondary, setCurrentViewSecondary] = useRecoil(atoms.tb.currentViewSecondary)

	return (
		<PokemonStage>
			<div className='pokemon-img'>
				<img src={pokemon.sprite} alt={pokemon.name} />
				<div className='form-control'>
					<label htmlFor=''>Pokemon</label>
					<input type='text' value={pokemon.name} />
				</div>
			</div>
			<div className='details'>
				<div className='form-control'>
					<label htmlFor=''>Item</label>
					<input type='text' />
					<label htmlFor=''>Ability</label>
					<input type='text' />
				</div>
			</div>
			<div className='moves'>
				<div className='form-control'>
					<label htmlFor=''>Moves</label>
					<input
						type='text'
						onClick={() => {
							if (currentView !== ViewPrimary.EditPokemon) {
								setCurrentView(ViewPrimary.EditPokemon)
							}
							if (currentViewSecondary !== ViewSecondary.Moves) {
								setCurrentViewSecondary(ViewSecondary.Moves)
							}
						}}
					/>
					<input type='text' />
					<input type='text' />
					<input type='text' />
				</div>
			</div>
		</PokemonStage>
	)
}
