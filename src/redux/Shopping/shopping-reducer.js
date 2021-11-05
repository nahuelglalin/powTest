import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
    articles: [], //img, productName, productColor, size, quantity = 1, prices, discount = 0 
    cart: [], //img, productName, productColor, size, quantity = 1, prices, discount = 0, qty
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADJUST_QTY:
            return {}
        case actionTypes.TOTAL_ORDER:
            return {}
        default:
            return state;
    }
}

export default shopReducer;