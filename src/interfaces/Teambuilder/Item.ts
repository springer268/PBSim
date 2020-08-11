module Item {
	export interface Abstract {
		sprite: string
		uglyName: string
		prettyName: string
		description: string
	}

	export interface Concrete {
		uglyName: string
	}
}

export default Item
