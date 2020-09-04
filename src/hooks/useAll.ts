import useSelector from './useSelector'

/**
 * Gets all the states and setters.
 * Really ugly here, but makes it so nice everywhere else.
 */
const useAll = () => {
	const [allAbilities, setAllAbilities] = useSelector(a => a.allAbilities)
	const [allItems, setAllItems] = useSelector(a => a.allItems)
	const [allPokemon, setAllPokemon] = useSelector(a => a.allPokemon)
	const [allMoves, setAllMoves] = useSelector(a => a.allMoves)
	const [currentMoveIndex, setCurrentMoveIndex] = useSelector(a => a.currentMoveIndex)
	const [currentPokemonIndex, setCurrentPokemonIndex] = useSelector(a => a.currentPokemonIndex)
	const [currentTeamID, setCurrentTeamID] = useSelector(a => a.currentTeamID)
	const [currentView, setCurrentView] = useSelector(a => a.currentView)
	const [currentViewSecondary, setCurrentViewSecondary] = useSelector(a => a.currentViewSecondary)
	const [editPokemonInput, setEditPokemonInput] = useSelector(a => a.editPokemonInput)
	const [teams, setTeams] = useSelector(a => a.teams)

	return {
		allAbilities,
		setAllAbilities,
		allItems,
		setAllItems,
		allPokemon,
		setAllPokemon,
		allMoves,
		setAllMoves,
		currentMoveIndex,
		setCurrentMoveIndex,
		currentPokemonIndex,
		setCurrentPokemonIndex,
		currentTeamID,
		setCurrentTeamID,
		currentView,
		setCurrentView,
		currentViewSecondary,
		setCurrentViewSecondary,
		editPokemonInput,
		setEditPokemonInput,
		teams,
		setTeams
	}
}

export default useAll
