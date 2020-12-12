import React, {useReducer} from 'react'
import ViewCounterMain from '../components/ViewCounterMain'
import reducer, {initialState} from '../reducer/reducer'
import * as actions from '../actions/actions'

const ContainerCounterMain: React.FC = (): React.ReactElement => {
    const [state, dispatch] = useReducer(reducer, initialState)

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
