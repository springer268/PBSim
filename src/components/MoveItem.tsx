import React from 'react'
import { MoveItem } from '../ui'
import { Teambuilder } from '../interfaces'

interface Props {
	move: Teambuilder.Move.Abstract
}

export default (props: Props) => {
	const { move } = props

	return (
		<MoveItem key={move.uglyName}>
			<p>{move.prettyName}</p>
		</MoveItem>
	)
}
