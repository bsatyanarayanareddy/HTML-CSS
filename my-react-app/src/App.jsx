import Box, { Box1 } from "./box";
import  {Header } from "./header";
import './App.css';
import avacado from './assets/avacado.jpeg';
import Date from "./date";
function App() {
  return (
    <>
      <Header></Header>
      <div className="App">
        <div className="boxes">
          <Box url={avacado}></Box>         
                   
        </div>
      </div>
    </>
  );
}

export default App;