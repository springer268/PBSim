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

export const viewCurrentTeam = atom({
	key: 'viewCurrentTeam',
	default: {} as Teambuilder.Team
})

export const viewSearchPokemon = atom({
	key: 'viewSearchPokemon',
	default: [] as Teambuilder.Pokemon[]
})

export const viewCurrentPokemon = atom({
	key: 'viewCurrentPokemon',
	default: {} as Teambuilder.Pokemon
})
