import Move from './Move'
import Item from './Item'
import Ability from './Ability'

module Pokemon {
	export interface Abstract {
		name: string
		id: number
		sprite: string
		types: string[]
		abilities: string[]
		moveset: string[]
		stats: {
			name: string
			base: number
		}[]
	}
	export interface Concrete {
		name: string
		nickname: string | null
		ability: Ability.Concrete
		index: number
		moves: Move.Concrete[]
		nature: string
		level: number
		gender: string
		shiny: boolean
		item: Item.Concrete | null
		evs: {
			stat: string
			value: number
		}[]
		ivs: {
			stat: string
			value: number
		}[]
	}
}

export default Pokemon
