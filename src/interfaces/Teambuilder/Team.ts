import Pokemon from './Pokemon'

interface Team {
	name: string
	id: number
	pokemon: Pokemon.Concrete[]
}

export default Team
