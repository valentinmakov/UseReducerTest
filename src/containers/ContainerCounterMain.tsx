import React, {useContext} from 'react'
import Context from '../context/context'
import ViewCounterMain from '../components/ViewCounterMain'
import * as actions from '../actions/actions'
import {Models} from '../models/models'

const ContainerCounterMain: React.FC = (): React.ReactElement => {
    const {state, dispatch} = useContext<Models.IContext>(Context)

    const performIncrementCounterSecondary = (): void => dispatch(actions.incrementCounterSecondary())
    const performDecrementCounterSecondary = (): void => dispatch(actions.decrementCounterSecondary())
    const performResetCounterSecondary = (): void => dispatch(actions.resetCounterSecondary())

    return (
        <ViewCounterMain
            counterMain={state.counterMain}
            performIncrementCounterSecondary={performIncrementCounterSecondary}
            performDecrementCounterSecondary={performDecrementCounterSecondary}
            performResetCounterSecondary={performResetCounterSecondary}
        />
    )

}

export default ContainerCounterMain
