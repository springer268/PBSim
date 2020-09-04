import { RecoilState } from 'recoil'
import useSelector from './useSelector'
import atoms from './atoms'

/**
 * Selects from the current atoms, and allows reduction on its changes.
 * At this point, you may be asking yourself "Why doesn't he just use Redux"...
 * Great question.
 *
 * @param selector The selection function
 * @param reducer The reducing function
 * @return The state, and a dispatch for the state
 */
const useSelectorReducer = <T>(
	selector: (state: typeof atoms) => RecoilState<T>,
	reducer: (state: T, action: { type: string; payload?: T }) => T
): [T, (action: { type: string; payload?: T }) => void] => {
	const [value, setValue] = useSelector(selector)
	const dispatch = (action: { type: string; payload?: T }) => {
		setValue(reducer(value, action))
	}
	return [value, dispatch]
}

export default useSelectorReducer
