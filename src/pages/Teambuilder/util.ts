import Teambuilder from 'interfaces/Teambuilder'

export const abstractToDefaultConcrete = (
	pokemon: Teambuilder.Pokemon.Abstract,
	index: number
): Teambuilder.Pokemon.Concrete => {
	const { name } = pokemon

	return {
		name,
		index,
		moves: [],
		nickname: null,
		item: null,
		ability: { uglyName: pokemon.abilities[0] },
		level: 100,
		gender: 'male',
		nature: 'serious',
		shiny: false,
		evs: [
			{ stat: 'hp', value: 0 },
			{ stat: 'attack', value: 0 },
			{ stat: 'defense', value: 0 },
			{ stat: 'specialAttack', value: 0 },
			{ stat: 'specialDefense', value: 0 },
			{ stat: 'speed', value: 0 }
		],
		ivs: [
			{ stat: 'hp', value: 31 },
			{ stat: 'attack', value: 31 },
			{ stat: 'defense', value: 31 },
			{ stat: 'specialAttack', value: 31 },
			{ stat: 'specialDefense', value: 31 },
			{ stat: 'speed', value: 31 }
		]
	}
}
