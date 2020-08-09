import { PokeAPI, Teambuilder } from './interfaces'
import axios from 'axios'

export const getPokeAPIPokemon = async (id: number): Promise<PokeAPI.Pokemon> => {
	return (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data as PokeAPI.Pokemon
}

export const convertPokeAPIPokemonToTeambuilder = (data: PokeAPI.Pokemon): Teambuilder.Pokemon => {
	return {
		name: data.name,
		id: data.id,
		sprite: data.sprites.front_default,
		types: data.types.map(type => type.type.name),
		abilities: data.abilities.map(ability => ability.ability.name),
		stats: data.stats.map(stat => ({
			name: stat.stat.name,
			base: stat.base_stat
		}))
	} as Teambuilder.Pokemon
}

export const getTeambuilderPokemon = async (id: number): Promise<Teambuilder.Pokemon> => {
	const data = await getPokeAPIPokemon(id)
	return convertPokeAPIPokemonToTeambuilder(data)
}
