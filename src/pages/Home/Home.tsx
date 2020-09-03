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
						<h2>Links</h2>
						<StyledLink to='/battle'>Go to Battle</StyledLink>
						<StyledLink to='/teambuilder'>Go to Teambuilder</StyledLink>
					</div>
					<div style={{ marginTop: '15px' }}>
						<h2>Current Issues</h2>
						<ol style={{ marginLeft: '17px' }}>
							<li>So many network requests to the PokeAPI, may not get all of them in time</li>
							<li>
								Not the most mobile friendly. Clicking on some buttons doesn't work on mobile yet for
								some reason.
							</li>
							<li>
								I'm writing an issues thing on the production website. I actually think this may not be
								an issue since mostly employeers will see this, and they'll know it's still buggy. Also
								hello employer :)
							</li>
							<li>
								Battle isn't implemented yet. Project only has front end at the moment. This project is
								actually a remake of a fully functional one I made awhile ago, but the code wasn't as
								maintanable as I wanted it, and I used Materialize and not my own CSS, so I'm remaking
								it now.
							</li>
							<li>Items and Abilities are ready to be implemented, just haven't been yet.</li>
							<li>
								Sidebar is kinda useless right now, and not that pretty. Should add links there, and
								have a burger menu for mobile.
							</li>
						</ol>
					</div>
				</Wrapper>
			</Grid>
		</Styling>
	)
}
