/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Teambuilder } from '../../interfaces'
import { getRangeOfTeambuilderPokemon, getRangeOfTeambuilderMoves } from '../../api'
import { useRecoilState as useRecoil } from 'recoil'
import atoms from '../../atoms'
import Teams from './primaryViews/Teams'
import Team from './primaryViews/Team'
import SearchPokemon from './primaryViews/SearchPokemon'
import EditPokemon from './primaryViews/EditPokemon'
import Navbar from '../../components/Navbar'

export enum ViewPrimary {
	Teams,
	Team,
	SearchPokemon,
	EditPokemon,
	SelectMove
}

interface RouteParams {}

interface Props extends RouteComponentProps<RouteParams> {}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoil(atoms.tb.currentView)
	const [teams, setTeams] = useRecoil(atoms.tb.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoil(atoms.tb.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoil(atoms.tb.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoil(atoms.tb.allPokemon)
	const [allMoves, setAllMoves] = useRecoil(atoms.tb.allMoves)

	const [MIN_POKEMON_ID, MAX_POKEMON_ID] = [1, 100]

	useEffect(() => {
		if (allPokemon.length !== MAX_POKEMON_ID - MIN_POKEMON_ID + 1) {
			;(async () => {
				console.log('Incorrect pokemon in localStorage, getting them now')

				const pokemon = await getRangeOfTeambuilderPokemon(MIN_POKEMON_ID, MAX_POKEMON_ID)
				localStorage.setItem('allPokemon', JSON.stringify(pokemon))
				setAllPokemon(pokemon)

				console.log('done getting pokemon data')
			})()
		} else {
			console.log('already got the pokemon')
		}
	}, [])

	useEffect(() => {
		if (allMoves.size === 0) {
			;(async () => {
				console.log('no moves in localStorage, getting them now')

				const moves = await getRangeOfTeambuilderMoves(1, 728)
				const map = new Map<string, Teambuilder.Move.Abstract>()

				moves.forEach(move => map.set(move.uglyName, move))

				localStorage.setItem('allMoves', JSON.stringify(Array.from(map.entries())))
				setAllMoves(map)

				console.log('done getting moves')
			})()
		} else {
			console.log('already got the map')
		}
	}, [])

	return (
		<>
			<Navbar />
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
						return <h1>Big fat problem in Teambuilder</h1>
				}
			})()}
		</>
	)
}
