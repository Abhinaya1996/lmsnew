import logo from './logo.svg';
import './App.css';
import {Button, ButtonTwo } from './components/Button';
import LmsButton from './components/Button';
import Counter from './components/Counter';
import Signup from './components/SignupForm';

function App() {
  let counters = [1,2,3,4,5,6,7,8,9,10,12]; //this value comes from database
  return (
    <div>
      <Button color="red" type="primary"></Button>
      <Button color="blue"></Button>
      <Button color="green"></Button>
      {/* <LmsButton type="primary"/> */}

      {/* {counters.map((counter)=>{
        return <Counter key={counter} />
      })} */}


      <Signup/>
    </div>

    // <button>Click me</button>
  );
}

export default App;
