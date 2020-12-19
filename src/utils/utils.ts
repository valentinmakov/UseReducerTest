import React from 'react'
import {
    Enums,
    Models,
} from '../models/models'

export const performNetworkCall = <T>(
    networkCallType: Enums.NetworkRequestType,
    dispatch: React.Dispatch<Models.IAction>,
    networkStartAction: () => Models.IAction,
    networkSuccessAction: (response: T) =>  Models.IAction,
    networkFailureAction: (error: Models.IError) => Models.IAction,
): void => {
    dispatch(networkStartAction())

    let requestUrl: string
    let method: string | undefined

    switch (networkCallType) {
        case 'Main':
            requestUrl = 'TODO'
            method = 'POST'
            break
        case 'Secondary':
            requestUrl = 'TODO'
            method = 'POST'
            break
        default:
            requestUrl = ''
            break
    }

    fetch
        .call(requestUrl, {method: method})
        .then((response: Response): Promise<any> => response.json())
        .then((json: any): void => {
            const response: T = json // TODO convert response; converter should be imported and have return type of T
            dispatch(networkSuccessAction(response))
        })
        .catch((error: any) => {
            const errorFormatted: Models.IError = {message: 'message'} // TODO convert error to errorFormatted
            dispatch(networkFailureAction(errorFormatted))
        })
}
