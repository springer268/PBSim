import Teambuilder from './interfaces/Teambuilder'
import PokeAPI from './interfaces/PokeAPI'
import axios from 'axios'

// POKEMON

export const getPokeAPIPokemon = async (id: number): Promise<PokeAPI.Pokemon> => {
	return (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data as PokeAPI.Pokemon
}

export const convertPokeAPIPokemonToTeambuilder = (data: PokeAPI.Pokemon): Teambuilder.Pokemon.Abstract => {
	return {
		name: data.name,
		id: data.id,
		sprite: data.sprites.front_default,
		types: data.types.map(type => type.type.name),
		abilities: data.abilities.map(ability => ability.ability.name),
		index: null,
		moveset: data.moves.map(move => move.move.name),
		stats: data.stats.map(stat => ({
			name: stat.stat.name,
			base: stat.base_stat
		}))
	} as Teambuilder.Pokemon.Abstract
}

export const getTeambuilderPokemon = async (id: number): Promise<Teambuilder.Pokemon.Abstract> => {
	const data = await getPokeAPIPokemon(id)
	return convertPokeAPIPokemonToTeambuilder(data)
}

export const getRangeOfTeambuilderPokemon = async (
	startID: number,
	endID: number
): Promise<Teambuilder.Pokemon.Abstract[]> => {
	const promises: Promise<Teambuilder.Pokemon.Abstract>[] = []

	for (let id = startID; id <= endID; id++) {
		promises.push(getTeambuilderPokemon(id))
	}

	return await Promise.all(promises)
}

// MOVES

export const getPokeAPIMove = async (id: string | number): Promise<PokeAPI.Move> => {
	return (await axios.get(`https://pokeapi.co/api/v2/move/${id}`)).data as PokeAPI.Move
}

export const convertPokeAPIMoveToTeambuilder = (data: PokeAPI.Move): Teambuilder.Move.Abstract => {
	return {
		prettyName: data.names[7].name,
		uglyName: data.name,
		type: data.type.name,
		damageClass: data.damage_class.name,
		accuracy: data.accuracy,
		pp: data.pp,
		description: data.flavor_text_entries[0].flavor_text,
		power: data.power
	} as Teambuilder.Move.Abstract
}

export const getTeambuilderMove = async (id: string | number): Promise<Teambuilder.Move.Abstract> => {
	const data = await getPokeAPIMove(id)
	return convertPokeAPIMoveToTeambuilder(data)
}

export const getRangeOfTeambuilderMoves = async (
	startID: number,
	endID: number
): Promise<Teambuilder.Move.Abstract[]> => {
	const promises: Promise<Teambuilder.Move.Abstract>[] = []

	for (let id = startID; id <= endID; id++) {
		promises.push(getTeambuilderMove(id))
	}

	return await Promise.all(promises)
}

// ITEMS

export const convertPokeAPIItemToTeambuilder = (data: PokeAPI.Item): Teambuilder.Item.Abstract => {
	return {
		sprite: data.sprites.default,
		prettyName: data.names[5].name,
		uglyName: data.name,
		description: data.flavor_text_entries[0].text
	} as Teambuilder.Item.Abstract
}

export const getPokeAPIItem = async (id: number): Promise<PokeAPI.Item> => {
	return (await axios.get(`https://pokeapi.co/api/v2/item/${id}`)).data as PokeAPI.Item
}

export const getTeambuilderItem = async (id: number): Promise<Teambuilder.Item.Abstract> => {
	const data = await getPokeAPIItem(id)
	return convertPokeAPIItemToTeambuilder(data)
}

export const getRangeOfTeambuilderItems = async (
	startID: number,
	endID: number
): Promise<Teambuilder.Item.Abstract[]> => {
	const promises: Promise<Teambuilder.Item.Abstract>[] = []

	for (let id = startID; id <= endID; id++) {
		promises.push(getTeambuilderItem(id))
	}

	return await Promise.all(promises)
}

// ABILITIES

export const convertPokeAPIAbilityToTeambuilder = (data: PokeAPI.Ability): Teambuilder.Ability.Abstract => {
	return {
		prettyName: data.names[5].name,
		uglyName: data.name,
		description: data.flavor_text_entries[0].flavor_text
	} as Teambuilder.Ability.Abstract
}

export const getPokeAPIAbility = async (id: number): Promise<PokeAPI.Ability> => {
	return (await axios.get(`https://pokeapi.co/api/v2/ability/${id}`)).data as PokeAPI.Ability
}

export const getTeambuilderAbility = async (id: number): Promise<Teambuilder.Ability.Abstract> => {
	const data = await getPokeAPIAbility(id)
	return convertPokeAPIAbilityToTeambuilder(data)
}

export const getRangeOfTeambuilderAbilities = async (
	startID: number,
	endID: number
): Promise<Teambuilder.Ability.Abstract[]> => {
	const promises: Promise<Teambuilder.Ability.Abstract>[] = []

	for (let id = startID; id <= endID; id++) {
		promises.push(getTeambuilderAbility(id))
	}

	return await Promise.all(promises)
}
