import React from 'react'
import styled from 'styled-components'
import { Teambuilder } from '../../interfaces'

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
	pokemon: Teambuilder.Pokemon
}

export default (props: Props) => {
	const { pokemon } = props

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
					<input type='text' />
					<input type='text' />
					<input type='text' />
					<input type='text' />
				</div>
			</div>
		</PokemonStage>
	)
}
