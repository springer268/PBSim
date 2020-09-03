import React from 'react'
import styled from 'styled-components'
import Teambuilder from 'interfaces/Teambuilder'

const MoveItem = styled.div`
	display: flex;
	padding: 10px;
	border: solid 1px #ddd;
	cursor: pointer;

	img {
		width: 70px;
		margin: auto 0;
	}

	p {
		text-transform: capitalize;
		margin: auto 0 auto 15px;
	}
`

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
