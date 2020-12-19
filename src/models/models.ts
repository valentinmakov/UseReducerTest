import * as actions from '../actions/actions'

export namespace Models {
    export interface IState {
        counterMain: number,
        counterSecondary: number,
    }

    export interface ICounerAction {
        type: (
            typeof actions.DECREMENT_COUNTER_MAIN |
            typeof actions.INCREMENT_COUNTER_MAIN |
            typeof actions.DECREMENT_COUNTER_SECONDARY |
            typeof actions.INCREMENT_COUNTER_SECONDARY |
            typeof actions.RESET_COUNTER_MAIN |
            typeof actions.RESET_COUNTER_SECONDARY
        ),
    }

    export type IAction = (ICounerAction)

    export type IReducer = (state: IState, action: IAction) => IState
}