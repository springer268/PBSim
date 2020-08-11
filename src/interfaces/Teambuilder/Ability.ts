module Ability {
	export interface Abstract {
		prettyName: string
		uglyName: string
		description: string
	}

	export interface Concrete {
		uglyName: string
	}
}

export default Ability
