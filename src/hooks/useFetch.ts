import React from 'react'
import {
    Enums,
    Models,
} from '../models/models'
import * as actions from '../actions/actions'
import * as utils from '../utils/utils'
import * as converters from '../converters/converters'

const useFetch = (
    type: Enums.NetworkRequestType,
    state: Models.IState,
    dispatch: React.Dispatch<Models.IAction>,
): void => {
    switch (type) {
        case 'Main':
            dispatch(actions.networkRequestStart())

            utils.performNetworkCall(
                type,
                converters.convertResponse,

                (responseConverted: Models.IResponseConverted): void => {
                    dispatch(actions.networkRequestSuccess(responseConverted.responseData))
                },

                (error: any): void => {
                    dispatch(actions.networkRequestFailure(error))
                },
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
