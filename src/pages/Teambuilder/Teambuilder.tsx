/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useRecoilState as useRecoil } from 'recoil'
import { SideNav, Navbar } from 'components'
import { Grid } from 'ui'
import { Team, Teams, SearchPokemon, EditPokemon } from './primaryViews'
import { ViewPrimary } from './views'
import atoms from 'atoms'

interface RouteParams {}

interface Props extends RouteComponentProps<RouteParams> {}

export default (props: Props) => {
	const [currentView] = useRecoil(atoms.currentView)

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
