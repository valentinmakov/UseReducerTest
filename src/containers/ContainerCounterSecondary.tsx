import React, {useContext} from 'react'
import Context from '../context/context'
import ViewCounterSecondary from '../components/ViewCounterSecondary'
import * as actions from '../actions/actions'
import useFetch from '../hooks/useFetch'

const ContainerCounterSecondary: React.FC = (): React.ReactElement => {
    const {state, dispatch} = useContext(Context)

    const performIncrementCounterMain = (): void => dispatch(actions.incrementCounterMain())
    const performDecrementCounterMain = (): void => dispatch(actions.decrementCounterMain())
    const performResetCounterMain = (): void => dispatch(actions.resetCounterMain())
    const performCallNetworkRequestMain = (): void => useFetch('Main', state, dispatch)

    return (
        <ViewCounterSecondary
            counterSecondary={state.counterSecondary}
            performIncrementCounterMain={performIncrementCounterMain}
            performDecrementCounterMain={performDecrementCounterMain}
            performResetCounterMain={performResetCounterMain}
            performCallNetworkRequestMain={performCallNetworkRequestMain}
        />
    )

}

export default ContainerCounterSecondary
