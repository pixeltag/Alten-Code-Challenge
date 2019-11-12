import socketIOClient from "socket.io-client";
const serverApi = process.env.SERVER_API || 'http://localhost:4001';
const socket = socketIOClient(serverApi);


function updateCustomers(data) {
    return {
      type: 'TRACER_CONNECT',
      payload: data
    };
  }

  export const tracerConnect = () => {
    return (dispatch) => {
        socket.on("sendingData", data =>  {
            dispatch(updateCustomers(data));
        })
    };
  }

//   export default tracerConnect;




// export const tracerConnect =  dispatch => {
//     dispatch({
//             type: "TRACER_CONNECT",
//         })
//         socket.on("sendingData", data =>  {
//         dispatch(
//             {
//                 type: "TRACER_CONNECT",
//                 payload: data
//             }
//         )
//         });

// };

// export const isConnected = data => {
//     return {
//         type: "TRACER_CONNECT",
//         payload: data
//     };
// };


// export const tracerConnect = () => {
//     return dispatch => {
//         socket.on("sendingData", data => {
//             dispatch(isConnected(data));
//         });
//     };
// };
