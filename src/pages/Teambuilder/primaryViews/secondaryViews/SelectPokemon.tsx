import React, { FC } from 'react'
import { useAll } from 'hooks'
import { PokemonItem } from 'components'

interface Props {}

const SelectPokemon: FC<Props> = ({ children }): JSX.Element => {
	const { allPokemon, editPokemonInput: input } = useAll()

	return (
		<>
			<div style={{ height: '395px', overflow: 'scroll' }}>
				{Array.from(allPokemon.entries()).map(([name, pokemon]) =>
					pokemon.name.includes(input.toLowerCase()) ? (
						<PokemonItem pokemon={pokemon} key={pokemon.id} />
					) : (
						<></>
					)
				)}
			</div>
		</>
	)
}

export default SelectPokemon
