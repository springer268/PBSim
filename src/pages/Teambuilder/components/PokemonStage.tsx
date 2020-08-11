/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import Teambuilder from '../../../interfaces/Teambuilder'
import { ViewPrimary, ViewSecondary } from '../views'
import { useRecoilState as useRecoil } from 'recoil'
import { PokemonStage } from '../ui'
import atoms from '../atoms'

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

	const abstractPokemon = allPokemon.get(pokemon.name) as Teambuilder.Pokemon.Abstract

	return (
		<PokemonStage>
			<div className='pokemon-img'>
				<img src={abstractPokemon.sprite} alt={pokemon.name} />
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
