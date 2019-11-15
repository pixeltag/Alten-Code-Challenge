import React from 'react'
import TracingComponent from './components/TracingComponent';
import Header from './layout/Header';
import Palette from './lib/Palette';
import { ThemeProvider } from '@material-ui/styles';


function App() {
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
