export interface AxiosResponse<T> {
	data: T
}

export declare module PokeAPI {
	module Pokemon {
		export interface Response {
			abilities: Ability[]
			base_experience: number
			forms: Species[]
			game_indices: GameIndex[]
			height: number
			held_items: HeldItem[]
			id: number
			is_default: boolean
			location_area_encounters: string
			moves: Move[]
			name: string
			order: number
			species: Species
			sprites: Sprites
			stats: Stat[]
			types: Type[]
			weight: number
		}

		export interface Ability {
			ability: Species
			is_hidden: boolean
			slot: number
		}

		export interface Species {
			name: string
			url: string
		}

		export interface GameIndex {
			game_index: number
			version: Species
		}

		export interface HeldItem {
			item: Species
			version_details: VersionDetail[]
		}

		export interface VersionDetail {
			rarity: number
			version: Species
		}

		export interface Move {
			move: Species
			version_group_details: VersionGroupDetail[]
		}

		export interface VersionGroupDetail {
			level_learned_at: number
			move_learn_method: Species
			version_group: Species
		}

		export interface GenerationV {
			'black-white': Sprites
		}

		export interface GenerationIv {
			'diamond-pearl': Sprites
			'heartgold-soulsilver': Sprites
			platinum: Sprites
		}

		export interface Versions {
			'generation-i': GenerationI
			'generation-ii': GenerationIi
			'generation-iii': GenerationIii
			'generation-iv': GenerationIv
			'generation-v': GenerationV
			'generation-vi': { [key: string]: GenerationVi }
			'generation-vii': GenerationVii
		}

		export interface Sprites {
			back_default: string
			back_female: null
			back_shiny: string
			back_shiny_female: null
			front_default: string
			front_female: null
			front_shiny: string
			front_shiny_female: null
			other?: Other
			versions?: Versions
		}

		export interface GenerationI {
			'red-blue': RedBlue
			yellow: RedBlue
		}

		export interface RedBlue {
			back_default: string
			back_gray: string
			front_default: string
			front_gray: string
		}

		export interface GenerationIi {
			crystal: Crystal
			gold: Crystal
			silver: Crystal
		}

		export interface Crystal {
			back_default: string
			back_shiny: string
			front_default: string
			front_shiny: string
		}

		export interface GenerationIii {
			emerald: Emerald
			'firered-leafgreen': Crystal
			'ruby-sapphire': Crystal
		}

		export interface Emerald {
			front_default: string
			front_shiny: string
		}

		export interface GenerationVi {
			front_default: string
			front_female: null
			front_shiny: string
			front_shiny_female: null
		}

		export interface GenerationVii {
			'ultra-sun-ultra-moon': GenerationVi
		}

		export interface Other {
			dream_world: DreamWorld
			'official-artwork': OfficialArtwork
		}

		export interface DreamWorld {
			front_default: string
			front_female: null
		}

		export interface OfficialArtwork {
			front_default: string
		}

		export interface Stat {
			base_stat: number
			effort: number
			stat: Species
		}

		export interface Type {
			slot: number
			type: Species
		}
	}

	export module Move {
		export interface Response {
			accuracy: number
			contest_combos: ContestCombos
			contest_effect: ContestEffect
			contest_type: ContestType
			damage_class: ContestType
			effect_chance: number
			effect_changes: any[]
			effect_entries: EffectEntry[]
			flavor_text_entries: FlavorTextEntry[]
			generation: ContestType
			id: number
			machines: Machine[]
			meta: Meta
			name: string
			names: Name[]
			past_values: PastValue[]
			power: number
			pp: number
			priority: number
			stat_changes: any[]
			super_contest_effect: ContestEffect
			target: ContestType
			type: ContestType
		}

		export interface ContestCombos {
			normal: Normal
			super: Normal
		}

		export interface Normal {
			use_after: ContestType[] | null
			use_before: null
		}

		export interface ContestType {
			name: string
			url: string
		}

		export interface ContestEffect {
			url: string
		}

		export interface EffectEntry {
			effect: string
			language: ContestType
			short_effect: string
		}

		export interface FlavorTextEntry {
			flavor_text: string
			language: ContestType
			version_group: ContestType
		}

		export interface Machine {
			machine: ContestEffect
			version_group: ContestType
		}

		export interface Meta {
			ailment: ContestType
			ailment_chance: number
			category: ContestType
			crit_rate: number
			drain: number
			flinch_chance: number
			healing: number
			max_hits: null
			max_turns: null
			min_hits: null
			min_turns: null
			stat_chance: number
		}

		export interface Name {
			language: ContestType
			name: string
		}

		export interface PastValue {
			accuracy: null
			effect_chance: null
			effect_entries: any[]
			power: number
			pp: null
			type: null
			version_group: ContestType
		}
	}

	export interface Pokemon extends PokeAPI.Pokemon.Response {}
	export interface Move extends PokeAPI.Move.Response {}
}

export declare module Teambuilder {
	export module Pokemon {
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
			id: number
			sprite: string
			types: string[]
			ability: string
			index: number
			moves: Teambuilder.Move.Abstract[]
			stats: {
				name: string
				base: number
			}[]
			level: number
			gender: string
			shiny: boolean
		}
	}

	export module Move {
		export interface Abstract {
			prettyName: string
			uglyName: string
			type: string
			damageClass: string
			accuracy: number
			pp: number
			description: string
			power?: number
		}
	}

	export interface Team {
		name: string
		id: number
		pokemon: Teambuilder.Pokemon.Concrete[]
	}
}

export declare module Game {}
