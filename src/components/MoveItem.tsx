import React, { FC } from 'react'
import styled from 'styled-components'
import Teambuilder from 'interfaces/Teambuilder'

const MoveItemUI = styled.div`
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

const MoveItem: FC<Props> = ({ children, move }): JSX.Element => {
	return (
		<MoveItemUI key={move.uglyName}>
			<p>{move.prettyName}</p>
		</MoveItemUI>
	)
}

export default MoveItem
