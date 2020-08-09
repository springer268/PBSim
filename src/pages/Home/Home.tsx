import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'

const Styling = styled.div``

interface RouteParams {}

interface Props extends RouteComponentProps<RouteParams> {}

export default (props: Props) => {
	return (
		<Styling>
			<h1>Edit me!</h1>
		</Styling>
	)
}
