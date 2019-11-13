const initialState = {
    customers: {},
    vehicles: {}
};

const tracerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TRACER_CONNECT":
            return {
                ...state,
                customers: action.payload.users,
                vehicles: action.payload.vehicles
            };
        case "TRACER_DISCONNECT":
            return {
                customers: null
            };
        default:
            return state;
    }
};

export default tracerReducer;
