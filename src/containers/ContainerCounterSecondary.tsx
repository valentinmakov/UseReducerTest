import React, {useContext} from 'react'
import Context from '../context/context'
import ViewCounterSecondary from '../components/ViewCounterSecondary'
import * as actions from '../actions/actions'
import useFetch from '../hooks/useFetch'
import {Models} from '../models/models'

const ContainerCounterSecondary: React.FC = (): React.ReactElement => {
    const {state, dispatch} = useContext<Models.IContext>(Context)

    const performIncrementCounterMain = (): void => dispatch(actions.incrementCounterMain())
    const performDecrementCounterMain = (): void => dispatch(actions.decrementCounterMain())
    const performResetCounterMain = (): void => dispatch(actions.resetCounterMain())
    const performCallNetworkRequestMain = (): void => useFetch('Main', state, dispatch)

    return (
        <ViewCounterSecondary
            counterSecondary={state.counterSecondary}
            networkCallPhase={state.networkPhase}
            networkCallResult={state.response}
            netwokCallError={state.error}
            performIncrementCounterMain={performIncrementCounterMain}
            performDecrementCounterMain={performDecrementCounterMain}
            performResetCounterMain={performResetCounterMain}
            performCallNetworkRequestMain={performCallNetworkRequestMain}
        />
    )

}

export default ContainerCounterSecondary
