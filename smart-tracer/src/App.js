import React , { useEffect } from 'react'
import TracingComponent from './components/TracingComponent';
import Header from './layout/Header';
import Palette from './lib/Palette';
import { ThemeProvider } from '@material-ui/styles';
import { useSelector , useDispatch } from "react-redux";
import { tracerConnect } from "./store/actions";
import socketIOClient from "socket.io-client";

const serverApi = process.env.SERVER_API || 'http://localhost:4001';
const socket = socketIOClient(serverApi);


function App() {
  const { customers } = useSelector(state => state.tracerReducer);
  console.log(customers)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tracerConnect());
  } );

  return (
    <div>
      <ThemeProvider theme={Palette}>
        <Header />
        <TracingComponent />
      </ThemeProvider>
    </div>
  )
}

export default App;
