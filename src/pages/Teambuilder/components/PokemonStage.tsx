/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import Teambuilder from '../../../interfaces/Teambuilder'
import { ViewPrimary, ViewSecondary } from '../views'
import { useRecoilState as useRecoil } from 'recoil'
import styled from 'styled-components'
import atoms from '../../../atoms'

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
	const [currentView, setCurrentView] = useRecoil(atoms.currentView)
	const [teams, setTeams] = useRecoil(atoms.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoil(atoms.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoil(atoms.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoil(atoms.allPokemon)
	const [allMoves, setAllMoves] = useRecoil(atoms.allMoves)
	const [currentViewSecondary, setCurrentViewSecondary] = useRecoil(atoms.currentViewSecondary)
	const [input, setInput] = useRecoil(atoms.editPokemonInput)
	const [currentMoveIndex, setCurrentMoveIndex] = useRecoil(atoms.currentMoveIndex)

	const abstractPokemon = allPokemon.get(pokemon.name) as Teambuilder.Pokemon.Abstract

	return (
		<PokemonStage>
			<div className='pokemon-img'>
				<img src={abstractPokemon.sprite} alt={pokemon.name} />
				<div className='form-control'>
					<label htmlFor=''>Pokemon</label>
					<input
						type='text'
						placeholder={pokemon.name}
						onClick={() => {
							setCurrentView(ViewPrimary.EditPokemon)
							setCurrentViewSecondary(ViewSecondary.Pokemon)
						}}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setInput(e.target.value)
						}}
					/>
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
					{[0, 1, 2, 3].map(i => {
						const actualName = allMoves.get(pokemon.moves[i]?.name)?.prettyName

						return (
							<input
								placeholder={actualName || ''}
								type='text'
								onClick={() => {
									setCurrentMoveIndex(i)
									setCurrentView(ViewPrimary.EditPokemon)
									setCurrentViewSecondary(ViewSecondary.Moves)
								}}
								onChange={e => {
									setInput(e.target.value)
								}}
							/>
						)
					})}
				</div>
			</div>
		</PokemonStage>
	)
}
