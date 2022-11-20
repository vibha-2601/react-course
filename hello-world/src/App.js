import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClickEvent from './Components/FunctionClickEvent';
import ClassClickEvent from './Components/ClassClickEvent';
import EventBind from './Components/EventBind';
import ParentComponents from './Components/ParentComponents'


function App() {
  return (
    <div className="App">
      <ParentComponents />
      {/* <EventBind /> */}
      {/* <FunctionClickEvent />
      <ClassClickEvent /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
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
