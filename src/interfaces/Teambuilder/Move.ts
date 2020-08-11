module Move {
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

	export interface Concrete {
		name: string
	}
}

export default Move
