import React from 'react'
import Teambuilder from 'interfaces/Teambuilder'
import { ViewPrimary, ViewSecondary } from 'pages/Teambuilder/views'
import { useRecoilState as useRecoil } from 'recoil'
import styled from 'styled-components'
import atoms from 'atoms'

const PokemonStage = styled.div`
	display: flex;
	min-height: 155px;
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
		min-height: 100px;
	}

	@media (max-width: 768px) {
		display: block;
		padding-bottom: 10px;

		.form-control {
			padding: 0 10px;
			margin: 0;
		}

		.pokemon-img {
			margin: auto;
		}
	}
`

interface Props {
	pokemon: Teambuilder.Pokemon.Concrete
}

export default (props: Props) => {
	const { pokemon } = props
	const [, setCurrentView] = useRecoil(atoms.currentView)
	const [allPokemon] = useRecoil(atoms.allPokemon)
	const [allMoves] = useRecoil(atoms.allMoves)
	const [, setCurrentViewSecondary] = useRecoil(atoms.currentViewSecondary)
	const [input, setInput] = useRecoil(atoms.editPokemonInput)
	const [, setCurrentMoveIndex] = useRecoil(atoms.currentMoveIndex)

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
