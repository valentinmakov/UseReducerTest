import {Models} from '../models/models'

export const INCREMENT_COUNTER_MAIN = 'INCREMENT_COUNTER_MAIN'
export const DECREMENT_COUNTER_MAIN = 'DECREMENT_COUNTER_MAIN'
export const INCREMENT_COUNTER_SECONDARY = 'INCREMENT_COUNTER_SECONDARY'
export const DECREMENT_COUNTER_SECONDARY = 'DECREMENT_COUNTER_SECONDARY'
export const RESET_COUNTER_MAIN = 'RESET_COUNTER_MAIN'
export const RESET_COUNTER_SECONDARY = 'RESET_COUNTER_SECONDARY'

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
