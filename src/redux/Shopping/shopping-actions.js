import * as actionTypes from './shopping-types';

export const ADJUST_QTY = (value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            qty: value
        }
    }
}

export const TOTAL_ORDER = (value) => {
    return {
        type: actionTypes.TOTAL_ORDER,
        payload: {
            order: value
        }
    }
}