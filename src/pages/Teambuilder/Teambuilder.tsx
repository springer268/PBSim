/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Teambuilder } from '../../interfaces'
import { getTeambuilderPokemon } from '../../api'
import { useSetRecoilState, useRecoilValue } from 'recoil'
import * as Atom from '../../atoms'
import Teams from './Teams'
import Team from './Team'
import SearchPokemon from './SearchPokemon'
import EditPokemon from './EditPokemon'

export enum View {
	Teams,
	Team,
	SearchPokemon,
	EditPokemon
}

interface RouteParams {}

interface Props extends RouteComponentProps<RouteParams> {}

export default (props: Props) => {
	const view = useRecoilValue(Atom.viewCurrentView)
	const setSearchPokemon = useSetRecoilState(Atom.viewSearchPokemon)

	useEffect(() => {
		;(async () => {
			const promises: Promise<Teambuilder.Pokemon>[] = []

			for (let id = 1; id <= 151; id++) {
				promises.push(getTeambuilderPokemon(id))
			}

			setSearchPokemon(await Promise.all(promises))
		})()
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
		default:
			return <h1>Big fat problem in Teambuilder</h1>
	}
}
