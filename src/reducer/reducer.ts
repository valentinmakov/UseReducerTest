import {Models} from '../models/models'
import * as actions from '../actions/actions'

export const initialState: Models.IState = {
    counterMain: 0,
    counterSecondary: 0,
}

const reducer = (state: Models.IState, action: Models.IAction): Models.IState => {
    switch (action.type) {
        case actions.INCREMENT_COUNTER_MAIN:
            return {
                ...state,
                counterMain: state.counterMain + 1,
            }
        case actions.DECREMENT_COUNTER_MAIN:
            return {
                ...state,
                counterMain: state.counterMain - 1,
            }
        case actions.RESET_COUNTER_MAIN:
            return {
                ...state,
                counterMain: initialState.counterMain,
            }
        case actions.INCREMENT_COUNTER_SECONDARY:
            return {
                ...state,
                counterSecondary: state.counterSecondary + 1,
            }
        case actions.DECREMENT_COUNTER_SECONDARY:
            return {
                ...state,
                counterSecondary: state.counterSecondary - 1,
            }
        case actions.RESET_COUNTER_SECONDARY:
            return {
                ...state,
                counterSecondary: initialState.counterSecondary,
            }
        default:
            return state
    }
}

export default reducer
