/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Teambuilder } from '../../interfaces'
import { getTeambuilderPokemon, getTeambuilderMove } from '../../api'
import { useRecoilState } from 'recoil'
import Atom from '../../atoms'
import Teams from './views/Teams'
import Team from './views/Team'
import SearchPokemon from './views/SearchPokemon'
import EditPokemon from './views/EditPokemon'
import SelectMove from './views/SelectMove'

export enum View {
	Teams,
	Team,
	SearchPokemon,
	EditPokemon,
	SelectMove
}

interface RouteParams {}

interface Props extends RouteComponentProps<RouteParams> {}

export default (props: Props) => {
	const [currentView, setCurrentView] = useRecoilState(Atom.Teambuilder.currentView)
	const [teams, setTeams] = useRecoilState(Atom.Teambuilder.teams)
	const [currentTeamID, setCurrentTeamID] = useRecoilState(Atom.Teambuilder.currentTeamID)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useRecoilState(Atom.Teambuilder.currentPokemonIndex)
	const [allPokemon, setAllPokemon] = useRecoilState(Atom.Teambuilder.allPokemon)
	const [allMoves, setAllMoves] = useRecoilState(Atom.Teambuilder.allMoves)

	const [MIN_POKEMON_ID, MAX_POKEMON_ID] = [1, 500]

	useEffect(() => {
		if (allPokemon.length !== MAX_POKEMON_ID - MIN_POKEMON_ID + 1) {
			;(async () => {
				console.log('Incorrect pokemon in localStorage, getting them now')

				const promises: Promise<Teambuilder.Pokemon.Abstract>[] = []

				for (let id = MIN_POKEMON_ID; id <= MAX_POKEMON_ID; id++) {
					promises.push(getTeambuilderPokemon(id))
				}

				const results = await Promise.all(promises)

				localStorage.setItem('allPokemon', JSON.stringify(results))

				setAllPokemon(results)

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

				const promises: Promise<Teambuilder.Move.Abstract>[] = []

				for (let id = 1; id <= 728; id++) {
					promises.push(getTeambuilderMove(id))
				}

				const data = await Promise.all(promises)
				const map = new Map<string, Teambuilder.Move.Abstract>()

				data.forEach(move => {
					map.set(move.uglyName, move)
				})

				localStorage.setItem('allMoves', JSON.stringify(Array.from(map.entries())))

				setAllMoves(map)

				console.log('done getting moves')
			})()
		} else {
			console.log('already got the map')
		}
	}, [])

	switch (currentView) {
		case View.Teams:
			return <Teams />
		case View.Team:
			return <Team />
		case View.SearchPokemon:
			return <SearchPokemon />
		case View.EditPokemon:
			return <EditPokemon />
		case View.SelectMove:
			return <SelectMove />
		default:
			return <h1>Big fat problem in Teambuilder</h1>
	}
}
