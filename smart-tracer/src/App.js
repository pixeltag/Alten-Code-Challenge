import React, { Component } from 'react'
import socketIOClient from "socket.io-client";
import TracingData from './components/tracingGrid';
import Header from './layout/Header';
import Palette from './lib/Palette';
import { ThemeProvider } from '@material-ui/styles';


const serverApi = process.env.SERVER_API || 'http://localhost:4001';

class App extends Component {
  constructor() {
      super();
      this.state = {
        tracingData: {}
      };
    }

componentDidMount() {
  // connect to the socket
  const socket = socketIOClient(serverApi);
  // listening to the emitting on the "sendingData" namespace
  socket.on("sendingData", data =>  {
    console.log(data , 'Tracing Data from the Server Socket');
    this.setState({tracingData: data})
  });
}

  render() {
    const { tracingData } = this.state || [];
    return (
      <div>
        <ThemeProvider theme={Palette}>
          <Header />
          <TracingData {...tracingData} />
        </ThemeProvider>
      </div>
    )
  }
}

export default App;
