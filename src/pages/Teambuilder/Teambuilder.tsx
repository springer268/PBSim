/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useSelector } from 'hooks'
import { SideNav, Navbar } from 'components'
import { Grid } from 'ui'
import { Team, Teams, SearchPokemon, EditPokemon } from './primaryViews'
import { ViewPrimary } from './views'

interface RouteParams {}

interface Props extends RouteComponentProps<RouteParams> {}

const Teambuilder: FC<Props> = ({ children }): JSX.Element => {
	const [currentView] = useSelector(a => a.currentView)

	return (
		<>
			<Navbar />
			<Grid>
				<SideNav />
				<div>
					{((): JSX.Element => {
						switch (currentView) {
							case ViewPrimary.Teams:
								return <Teams />
							case ViewPrimary.Team:
								return <Team />
							case ViewPrimary.EditPokemon:
								return <EditPokemon />
							case ViewPrimary.SearchPokemon:
								return <SearchPokemon />
							default:
								return <h1>Error: Unhandled Primary View</h1>
						}
					})()}
				</div>
			</Grid>
		</>
	)
}

export default Teambuilder
