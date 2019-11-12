const initialState = {
    customers: {}
};

const tracerReducer = (state = initialState , action) => {
    switch(action.type) {
        case "TRACER_CONNECT":
            return {
                ...state,
                customers: action.payload
            }
        case "TRACER_DISCONNECT":
            return {
                customers: null
            }
        default:
            return state;
    }
}

export default tracerReducer;