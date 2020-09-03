import React from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import { PokemonItem } from '../../../../components'
import atoms from '../../../../atoms'

interface Props {}

export default (props: Props) => {
	const [allPokemon] = useRecoil(atoms.allPokemon)
	const [input] = useRecoil(atoms.editPokemonInput)

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
