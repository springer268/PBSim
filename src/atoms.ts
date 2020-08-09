import { atom } from 'recoil'
import { Teambuilder } from './interfaces'

export const viewTeams = atom({
	key: 'viewTeams',
	default: [] as Teambuilder.Team[]
})

export const viewCurrentView = atom({
	key: 'viewCurrentView',
	default: 0
})

export const viewCurrentTeamID = atom({
	key: 'viewCurrentTeam',
	default: 0
})

export const viewSearchPokemon = atom({
	key: 'viewSearchPokemon',
	default: [] as Teambuilder.Pokemon[]
})

export const viewCurrentPokemonIndex = atom({
	key: 'viewCurrentPokemon',
	default: 0
})
