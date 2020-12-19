import {Models} from '../models/models'

export const INCREMENT_COUNTER_MAIN = 'INCREMENT_COUNTER_MAIN'
export const DECREMENT_COUNTER_MAIN = 'DECREMENT_COUNTER_MAIN'
export const INCREMENT_COUNTER_SECONDARY = 'INCREMENT_COUNTER_SECONDARY'
export const DECREMENT_COUNTER_SECONDARY = 'DECREMENT_COUNTER_SECONDARY'
export const RESET_COUNTER_MAIN = 'RESET_COUNTER_MAIN'
export const RESET_COUNTER_SECONDARY = 'RESET_COUNTER_SECONDARY'

export const NETWORK_REQUEST_START = 'NETWORK_REQUEST_START'
export const NETWORK_REQUEST_SUCCESS = 'NETWORK_REQUEST_SUCCESS'
export const NETWORK_REQUEST_FAILURE = 'NETWORK_REQUEST_FAILURE'

export const incrementCounterMain = (): Models.IAction => ({
    type: INCREMENT_COUNTER_MAIN,
})
export const decrementCounterMain = (): Models.IAction => ({
    type: DECREMENT_COUNTER_MAIN,
})
export const incrementCounterSecondary = (): Models.IAction => ({
    type: INCREMENT_COUNTER_SECONDARY,
})
export const decrementCounterSecondary = (): Models.IAction => ({
    type: DECREMENT_COUNTER_SECONDARY,
})
export const resetCounterMain = (): Models.IAction => ({
    type: RESET_COUNTER_MAIN,
})
export const resetCounterSecondary = (): Models.IAction => ({
    type: RESET_COUNTER_SECONDARY,
})

export const networkRequestStart = (): Models.IAction => ({
    type: NETWORK_REQUEST_START,
})
export const networkRequestSuccess = (response: string): Models.IAction => ({
    type: NETWORK_REQUEST_SUCCESS,
    payload: response,
})
export const networkRequestFailure = (error: Models.IError): Models.IAction => ({
    type: NETWORK_REQUEST_FAILURE,
    payload: error,
})
