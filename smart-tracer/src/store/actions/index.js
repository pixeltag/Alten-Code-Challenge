import socketIOClient from "socket.io-client";
const serverApi = process.env.REACT_APP_SERVER_API || "http://localhost:4001";
const socket = socketIOClient(serverApi);

function updateCustomers(data) {
    return {
        type: "TRACER_CONNECT",
        payload: data
    };
}

export const tracerConnect = () => {
    return dispatch => {
        socket.on("sendingData", data => {
            dispatch(updateCustomers(data));
        });
    };
};
