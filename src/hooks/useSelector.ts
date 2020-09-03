import { useRecoilState, RecoilState } from 'recoil'
import atoms, { Atoms } from 'hooks/atoms'

const useSelector = <T extends unknown>(selector: (state: Atoms) => RecoilState<T>) => {
	return useRecoilState(selector(atoms))
}

export default useSelector
