import { Teambuilder } from './interfaces'

export const abstractToDefaultConcrete = (
	pokemon: Teambuilder.Pokemon.Abstract,
	index: number
): Teambuilder.Pokemon.Concrete => {
	const { name, id, sprite, types, stats } = pokemon

	return {
		name,
		id,
		sprite,
		types,
		stats,
		index,
		moves: [],
		nickname: null,
		ability: pokemon.abilities[0],
		level: 100,
		gender: 'male',
		shiny: false
	}
}
