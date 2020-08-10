/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Teambuilder } from '../../interfaces'
import { getTeambuilderPokemon, getTeambuilderMove } from '../../api'
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil'
import * as Atom from '../../atoms'
import Teams from './Teams'
import Team from './Team'
import SearchPokemon from './SearchPokemon'
import EditPokemon from './EditPokemon'
import SelectMove from './SelectMove'

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
	const view = useRecoilValue(Atom.viewCurrentView)
	const [searchPokemon, setSearchPokemon] = useRecoilState(Atom.viewSearchPokemon)
	const [allMoves, setAllMoves] = useRecoilState(Atom.viewAllMoves)

	useEffect(() => {
		if (searchPokemon.length === 0) {
			;(async () => {
				console.log('No pokemon in localStorage, getting them now')

				const promises: Promise<Teambuilder.Pokemon.Abstract>[] = []

				for (let id = 1; id <= 490; id++) {
					promises.push(getTeambuilderPokemon(id))
				}

				const results = await Promise.all(promises)

				localStorage.setItem('searchPokemon', JSON.stringify(results))

				setSearchPokemon(results)

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

	switch (view) {
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
