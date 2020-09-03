import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../../components/Navbar'
import SideNav from '../../components/SideNav'
import { Heading, Wrapper, StyledLink, Grid } from '../../ui'

const Styling = styled.div``

interface RouteParams {}

interface Props extends RouteComponentProps<RouteParams> {}

export default (props: Props) => {
	return (
		<Styling>
			<Navbar />
			<Grid>
				<SideNav />
				<Wrapper>
					<Heading>Home</Heading>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<StyledLink to='/battle'>Battle</StyledLink>
						<StyledLink to='/teambuilder'>Teambuilder</StyledLink>
					</div>
				</Wrapper>
			</Grid>
		</Styling>
	)
}
