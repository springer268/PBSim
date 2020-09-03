/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useRecoilState as useRecoil } from 'recoil'
import atoms from '../../atoms'
import Teams from './primaryViews/Teams'
import Team from './primaryViews/Team'
import SearchPokemon from './primaryViews/SearchPokemon'
import EditPokemon from './primaryViews/EditPokemon'
import SideNav from '../../components/SideNav'
import Navbar from '../../components/Navbar'
import { ViewPrimary } from './views'
import { Grid } from '../../ui'

interface RouteParams {}

interface Props extends RouteComponentProps<RouteParams> {}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoil(atoms.currentView)
	const [teams, setTeams] = useRecoil(atoms.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoil(atoms.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoil(atoms.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoil(atoms.allPokemon)
	const [allMoves, setAllMoves] = useRecoil(atoms.allMoves)
	const [allItems, setAllItems] = useRecoil(atoms.allItems)
	const [allAbilities, setAllAbilities] = useRecoil(atoms.allAbilities)

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
