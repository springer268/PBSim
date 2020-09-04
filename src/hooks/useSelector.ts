import { useRecoilState, RecoilState } from 'recoil'
import atoms from 'hooks/atoms'

/**
 * Selects the desired state
 * @param selector The selection function
 */
const useSelector = <T>(selector: (state: typeof atoms) => RecoilState<T>) => {
	return useRecoilState(selector(atoms))
}

export default useSelector
