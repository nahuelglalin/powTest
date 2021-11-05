
const initialState = {
    bag: 0,
    total: 0,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREASE_ORDER":
            console.log("STATEEE", state);
            return state.total + state;
        case "DECREASE_ORDER":
            console.log("STATEEE", state);
            return state.total - state;
        case "TOTAL_ORDER": 
            console.log("STATEEE", state);
            return state.bag + state; 
        default:
            return state;
    }

}