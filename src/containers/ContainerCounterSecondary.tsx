import React, {useReducer} from 'react'
import ViewCounterSecondary from '../components/ViewCounterSecondary'
import reducer, {initialState} from '../reducer/reducer'
import * as actions from '../actions/actions'

const ContainerCounterSecondary: React.FC = (): React.ReactElement => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const performIncrementCounterMain = (): void => dispatch(actions.incrementCounterMain())
    const performDecrementCounterMain = (): void => dispatch(actions.decrementCounterMain())
    const performResetCounterMain = (): void => dispatch(actions.resetCounterMain())

    return (
        <ViewCounterSecondary
            counterSecondary={state.counterSecondary}
            performIncrementCounterMain={performIncrementCounterMain}
            performDecrementCounterMain={performDecrementCounterMain}
            performResetCounterMain={performResetCounterMain}
        />
    )

}

export default ContainerCounterSecondary
