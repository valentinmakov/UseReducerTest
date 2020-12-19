import React from 'react'
import {
    Enums,
    Models,
} from '../models/models'
import * as actions from '../actions/actions'
import * as utils from '../utils/utils'

const useFetch = (
    type: Enums.NetworkRequestType,
    state: Models.IState,
    dispatch: React.Dispatch<Models.IAction>,
): void => {
    switch (type) {
        case 'Main':
            utils.performNetworkCall(
                type,
                dispatch,
                actions.networkRequestStart,
                actions.networkRequestSuccess,
                actions.networkRequestFailure,
            )
            break
        case 'Secondary':
            // TODO
            break
        default:
            // TODO
            break

    }
}

export default useFetch
