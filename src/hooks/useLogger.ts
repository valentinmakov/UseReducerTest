import {useCallback} from 'react'
import {Models} from '../models/models'

const useLogger = (reducer: Models.IReducer): Models.IReducer => {
    const loggedReducer: Models.IReducer = useCallback(
        (state: Models.IState, action: Models.IAction): Models.IState => {
            const nextState: Models.IState = reducer(state, action)

            console.log(`Previous State:\n${state}`)
            console.log(`Action:\n${action}`)
            console.log(`Next State:\n${nextState}`)

            return nextState
        },
        [reducer]
    )

    return loggedReducer
}

export default useLogger
