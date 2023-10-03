import './App.css';
import Card from './card';
import Nav from './nav';
import Data from "./data"

function App() {
  const cards = Data.map(item=>{
    return(
      <Card
      {...item}
      />
    )
  })
  return (
    <div className="App">
      <Nav/>
     <card>
      {cards}
      </card>
    </div>
  );
}

export default App;
