import React , {useState} from 'react'
import TracingComponent from './components/TracingComponent';
import Header from './layout/Header';
import Palette from './lib/Palette';
import { ThemeProvider } from '@material-ui/styles';
import Fullscreen from "react-full-screen";


function App() {
  const [ isFull , setIsFull ] = useState(false);

  const goFull = () => {
    setIsFull(!isFull);
  }




  return (
    <div>
       <Fullscreen enabled={isFull} onChange={ isFull => setIsFull(isFull) }>
          <ThemeProvider theme={Palette}>
            <Header onFullscreen={goFull} fullscreen={isFull}/>
            <TracingComponent />
          </ThemeProvider>
        </Fullscreen>
    </div>
  )
}

export default App;
