import { atom } from 'recoil'
import { Teambuilder } from './interfaces'

export const viewTeams = atom({
	key: 'viewTeams',
	default: JSON.parse(localStorage.getItem('teams') ?? '[]') as Teambuilder.Team[]
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
	default:
		localStorage.getItem('searchPokemon') !== null
			? (JSON.parse(localStorage.getItem('searchPokemon') as string) as Teambuilder.Pokemon.Abstract[])
			: ([] as Teambuilder.Pokemon.Abstract[])
})

export const viewCurrentPokemonIndex = atom({
	key: 'viewCurrentPokemon',
	default: 0
})

export const viewAllMoves = atom({
	key: 'viewAllMoves',
	default:
		localStorage.getItem('allMoves') !== null
			? new Map<string, Teambuilder.Move.Abstract>(JSON.parse(localStorage.getItem('allMoves') as string))
			: new Map<string, Teambuilder.Move.Abstract>()
})
