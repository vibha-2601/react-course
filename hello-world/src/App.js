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
import UserGreeting from './Components/UserGreeting';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import './appStyle.css'
import Styles from './appStyles.module.css'
import Form from './Components/Form'
import LifeCycleA from './Components/LifeCycleA';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table'
import ParentCompClass from './Components/ParentCompClass';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/Input'
import FRParentInput from './FRParentInput';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounterTwo from './Components/ClickCounterTwo';
import HoverCounterTwo from './Components/HoverCounterTwo';
import User from './Components/User';
import CounterTwo from './Components/CounterTwo';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/userContext'


function App() {
  return (
    <div className="App">
      <UserProvider value='Robert'>
       <ComponentC />
      </UserProvider>
      
    {/* <CounterTwo>
      {(count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount} />)}
      </CounterTwo>  

      <CounterTwo>
      {(count, incrementCount) => (<HoverCounterTwo count={count} incrementCount={incrementCount} />)}
      </CounterTwo>  */}

{/* <ClickCounterTwo />
<HoverCounterTwo />
<User render={(isLoggedIn) => isLoggedIn ? 'Robert' : 'Guest'}/> */}
      {/* <ClickCounter name='Robert' />
      <HoverCounter /> */}
{/*     
      <ErrorBoundary>
           <Hero heroName="Batman" />
     </ErrorBoundary>

      <ErrorBoundary>
      <Hero heroName="Superman" />
      </ErrorBoundary>

        <ErrorBoundary>
      <Hero heroName="Joker" />
    </ErrorBoundary> */}
 
      
     

      {/* <FRParentInput /> */}
{/* <FocusInput /> */}
{/* <RefsDemo /> */}
     {/* <ParentCompClass /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
{/* // <h1 className='error'>Error</h1>
// <h1 className={Styles.success}>Success</h1> */}

      {/* <Inline /> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponents /> */}
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
