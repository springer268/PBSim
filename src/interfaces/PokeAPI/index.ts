import Pokemon from './Pokemon'
import Move from './Move'
import Item from './Item'
import Ability from './Ability'

module PokeAPI {
	export interface Pokemon extends Pokemon.Response {}
	export interface Move extends Move.Response {}
	export interface Item extends Item.Response {}
	export interface Ability extends Ability.Response {}
}

export default PokeAPI
