import { atom } from 'recoil'
import { Teambuilder } from './interfaces'

export default {
	tb: {
		teams: atom({
			key: 'teambuilder-teams',
			default: JSON.parse(localStorage.getItem('teams') ?? '[]') as Teambuilder.Team[]
		}),

		currentView: atom({
			key: 'teambuilder-currentView',
			default: 0
		}),

		currentTeamID: atom({
			key: 'teambuilder-currentTeamID',
			default: 0
		}),

		allPokemon: atom({
			key: 'teambuilder-allPokemon',
			default:
				localStorage.getItem('allPokemon') !== null
					? (JSON.parse(localStorage.getItem('allPokemon') as string) as Teambuilder.Pokemon.Abstract[])
					: ([] as Teambuilder.Pokemon.Abstract[])
		}),

		currentPokemonIndex: atom({
			key: 'teambuilder-currentPokemonIndex',
			default: 0
		}),

		allMoves: atom({
			key: 'teambuilder-allMoves',
			default:
				localStorage.getItem('allMoves') !== null
					? new Map<string, Teambuilder.Move.Abstract>(JSON.parse(localStorage.getItem('allMoves') as string))
					: new Map<string, Teambuilder.Move.Abstract>()
		}),

		currentViewSecondary: atom({
			key: 'teambuilder-currentViewSecondary',
			default: 0
		})
	}
}
