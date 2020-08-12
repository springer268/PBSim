import { atom } from 'recoil'
import Teambuilder from '../../interfaces/Teambuilder'
import { ViewPrimary, ViewSecondary } from './views'

export default {
	currentView: atom({
		key: 'teambuilder-currentView',
		default: ViewPrimary.EditPokemon
	}),

	currentViewSecondary: atom({
		key: 'teambuilder-currentViewSecondary',
		default: ViewSecondary.Moves
	}),

	teams: atom({
		key: 'teambuilder-teams',
		default: JSON.parse(localStorage.getItem('teams') ?? '[]') as Teambuilder.Team[]
	}),

	currentTeamID: atom({
		key: 'teambuilder-currentTeamID',
		default: 0
	}),

	currentPokemonIndex: atom({
		key: 'teambuilder-currentPokemonIndex',
		default: 0
	}),

	allPokemon: atom({
		key: 'teambuilder-allPokemon',
		default:
			localStorage.getItem('allPokemon') !== null
				? new Map<string, Teambuilder.Pokemon.Abstract>(
						JSON.parse(localStorage.getItem('allPokemon') as string)
				  )
				: new Map<string, Teambuilder.Pokemon.Abstract>()
	}),

	allMoves: atom({
		key: 'teambuilder-allMoves',
		default:
			localStorage.getItem('allMoves') !== null
				? new Map<string, Teambuilder.Move.Abstract>(JSON.parse(localStorage.getItem('allMoves') as string))
				: new Map<string, Teambuilder.Move.Abstract>()
	}),

	allItems: atom({
		key: 'teambuilder-allItems',
		default:
			localStorage.getItem('allItems') !== null
				? new Map<string, Teambuilder.Item.Abstract>(JSON.parse(localStorage.getItem('allItems') as string))
				: new Map<string, Teambuilder.Item.Abstract>()
	}),

	allAbilities: atom({
		key: 'teambuilder-allAbilities',
		default:
			localStorage.getItem('allAbilities') !== null
				? new Map<string, Teambuilder.Ability.Abstract>(
						JSON.parse(localStorage.getItem('allAbilities') as string)
				  )
				: new Map<string, Teambuilder.Ability.Abstract>()
	}),

	editPokemonInput: atom({
		key: 'teambuilder-editPokemonInput',
		default: ''
	}),

	currentMoveIndex: atom({
		key: 'teambuilder-currentMoveIndex',
		default: 0
	})
}
