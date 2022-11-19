import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Message from './Components/Message'

function App() {
  return (
    <div className="App">
      <Message />
    {/* <Greet name="Robert" heroName="Batman">
      <p>This is a children props</p>
    </Greet>
    <Greet name="David" heroName="Spiderman">
      <button>Action</button>
    </Greet>
    <Greet name="Kendall" heroName="Superman"/>
    <Welcome name="Robert" heroName="Batman"/>
    <Welcome name="David" heroName="Spiderman"/>
    <Welcome name="Kendall" heroName="Superman"/> */}
    
    </div>
  );
}

export default App;
