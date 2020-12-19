import {useCallback} from 'react'
import {Models} from '../models/models'

const useLogger = (reducer: Models.IReducer): Models.IReducer => {
    const loggedReducer: Models.IReducer = useCallback(
        (state: Models.IState, action: Models.IAction): Models.IState => {
            const nextState: Models.IState = reducer(state, action)

            if (__DEV__) {
                console.log('%cPrevious State:', 'color: grey; font-weight: 800;', state)
                console.log('%cAction:', 'color: turquoise; font-weight: 800;', action)
                console.log('%cNext State:', 'color: lime; font-weight: 800;', nextState)
            }

            return nextState
        },
        [reducer]
    )

    return loggedReducer
}

export default useLogger
