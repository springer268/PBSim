/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, FC } from 'react'
import {
	getRangeOfTeambuilderPokemon,
	getRangeOfTeambuilderMoves,
	getRangeOfTeambuilderItems,
	getRangeOfTeambuilderAbilities
} from 'api'
import Teambuilder from 'interfaces/Teambuilder'
import { useAll } from 'hooks'

interface Props {}

const StorageCacher: FC<Props> = ({ children }): JSX.Element => {
	const {
		allPokemon,
		setAllPokemon,
		allMoves,
		setAllMoves,
		allItems,
		setAllItems,
		allAbilities,
		setAllAbilities
	} = useAll()

	useEffect(() => {
		if (allPokemon.size === 0) {
			const fetchPokemon = async () => {
				try {
					console.log('Fetching Pokemon')
					const allPokemonMap = new Map<string, Teambuilder.Pokemon.Abstract>()

					const pokemon = await getRangeOfTeambuilderPokemon(1, 100)
					pokemon.forEach(pokemon => allPokemonMap.set(pokemon.name, pokemon))
					localStorage.setItem('allPokemon', JSON.stringify(Array.from(allPokemonMap.entries())))
					setAllPokemon(allPokemonMap)

					console.log('Finished fetching Pokemon', allPokemonMap)
				} catch {
					setTimeout(1000, fetchPokemon)
				}
			}
			fetchPokemon()
		} else {
			console.log('Cached Pokemon', allPokemon)
		}
	}, [])

	useEffect(() => {
		if (allMoves.size === 0) {
			const fetchMoves = async () => {
				try {
					console.log('Fetching moves.')

					const moves = await getRangeOfTeambuilderMoves(1, 728)
					const allMovesMap = new Map<string, Teambuilder.Move.Abstract>()

					moves.forEach(move => allMovesMap.set(move.uglyName, move))

					localStorage.setItem('allMoves', JSON.stringify(Array.from(allMovesMap.entries())))
					setAllMoves(allMovesMap)

					console.log('Finished fetching moves', allMovesMap)
				} catch {
					setTimeout(2000, fetchMoves)
				}
			}
			fetchMoves()
		} else {
			console.log('Cached Moves', allMoves)
		}
	}, [])

	useEffect(() => {
		if (allItems.size === 0) {
			const fetchItems = async () => {
				try {
					console.log('Fetching items.')

					const items = await getRangeOfTeambuilderItems(1, 50)
					const allItemsMap = new Map<string, Teambuilder.Item.Abstract>()

					items.forEach(item => allItemsMap.set(item.uglyName, item))

					localStorage.setItem('allItems', JSON.stringify(Array.from(allItemsMap.entries())))
					setAllItems(allItemsMap)

					console.log('Finished fetching items', allItemsMap)
				} catch {
					setTimeout(4000, fetchItems)
				}
			}
			fetchItems()
		} else {
			console.log('Cached Items', allItems)
		}
	}, [])

	useEffect(() => {
		if (allAbilities.size === 0) {
			const fetchAbilities = async () => {
				try {
					console.log('Fetching abilities.')

					const abilities = await getRangeOfTeambuilderAbilities(1, 233)
					const allAbilitiesMap = new Map<string, Teambuilder.Ability.Abstract>()

					abilities.forEach(ability => allAbilitiesMap.set(ability.uglyName, ability))

					localStorage.setItem('allAbilities', JSON.stringify(Array.from(allAbilitiesMap.entries())))
					setAllAbilities(allAbilitiesMap)

					console.log('Finished fetching abilities', allAbilitiesMap)
				} catch {
					setTimeout(4000, fetchAbilities)
				}
			}
			fetchAbilities()
		} else {
			console.log('Cached Abilities', allAbilities)
		}
	}, [])

	return <></>
}

export default StorageCacher
