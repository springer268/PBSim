import React, { useState, FC } from 'react'
import { useAll } from 'hooks'
import { PokemonItem, CurrentTeamNav } from 'components'
import { Searchbar, Button } from 'ui'
import { ViewPrimary } from '../views'

interface Props {}

const SearchPokemon: FC<Props> = ({ children }): JSX.Element => {
	const { setCurrentView, allPokemon } = useAll()

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

export default SearchPokemon
