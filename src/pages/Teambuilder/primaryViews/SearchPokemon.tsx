import React, { useState } from 'react'
import { useRecoilState as useRecoil } from 'recoil'
import { PokemonItem, CurrentTeamNav } from 'components'
import { Searchbar, Button } from 'ui'
import atoms from 'atoms'
import { ViewPrimary } from '../views'

interface Props {}

export default (props: Props) => {
	const [, setCurrentView] = useRecoil(atoms.currentView)
	const [allPokemon] = useRecoil(atoms.allPokemon)

	const [input, setInput] = useState<string>('')

	return (
		<>
			<CurrentTeamNav>
				<Button onClick={() => setCurrentView(ViewPrimary.Team)}>Back</Button>
			</CurrentTeamNav>
			<Searchbar
				type='text'
				placeholder='Search for a Pokemon'
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setInput(e.target.value)
				}}
			/>
			<div style={{ height: '600px', overflow: 'scroll' }}>
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
