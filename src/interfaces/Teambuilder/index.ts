import _Team from './Team'
import _Pokemon from './Pokemon'
import _Move from './Move'
import _Item from './Item'
import _Ability from './Ability'

module Teambuilder {
	export interface Team extends _Team {}
	export module Pokemon {
		export interface Abstract extends _Pokemon.Abstract {}
		export interface Concrete extends _Pokemon.Concrete {}
	}
	export module Move {
		export interface Abstract extends _Move.Abstract {}
		export interface Concrete extends _Move.Concrete {}
	}
	export module Item {
		export interface Abstract extends _Item.Abstract {}
		export interface Concrete extends _Item.Concrete {}
	}
	export module Ability {
		export interface Abstract extends _Ability.Abstract {}
		export interface Concrete extends _Ability.Concrete {}
	}
}

export default Teambuilder
