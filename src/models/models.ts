import * as actions from '../actions/actions'

export namespace Models {
    export interface IContext {
        state: Models.IState,
        dispatch: React.Dispatch<Models.IAction>,
    }
    export interface IState {
        counterMain: number,
        counterSecondary: number,
        networkPhase: Enums.NetworkPhase,
        response: string | null,
        error: IError | null,
    }

    export interface IError {
        code?: string,
        message: string,
        comment?: string,
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

    export interface INetworkRequestStart {
        type: typeof actions.NETWORK_REQUEST_START,
        payload?: string | IError,
    }
    export interface INetworkRequestSuccess {
        type: typeof actions.NETWORK_REQUEST_SUCCESS,
        payload: string,
    }
    export interface INetworkRequestFailure {
        type: typeof actions.NETWORK_REQUEST_FAILURE,
        payload: IError,
    }

    export type IAction = (
        ICounerAction |
        INetworkRequestStart |
        INetworkRequestSuccess |
        INetworkRequestFailure
    )

    export type IReducer = (state: IState, action: IAction) => IState

    export interface IResponse {
        data: IResponseData[],
    }

    export interface IResponseData {
        id: number,
        user_id: number,
        title: string,
        body: string,
        created_at: string,
        updated_at: string,
    }

    export interface IResponseConverted {
        responseData: string,
    }
}

export namespace Enums {
    export type NetworkPhase = (
        'Idle' |
        'InProgress' |
        'Success' |
        'Failure'
    )

    export type NetworkRequestType = (
        'Main' |
        'Secondary'
    )
}