import logo from './logo.svg';
import './App.css';
// import {Button, ButtonTwo } from './components/Button';
import LmsButton from './components/Button';
import Counter from './components/Counter';
import Signup from './components/SignupForm';
import Text from './components/Text';
import Heading from './components/Heading';
import { Button } from 'antd';
import AntForm from './components/Forms';
import MainLayout from './pages/MainLayout';
import { BrowserRouter } from 'react-router-dom';
import LayoutDemo from './components/LayoutDemo';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';


const FallbackComponent = ({error}) => {
  return (
      <div>
          <h1>Something went wrong</h1>
          <p>{error.message}</p>
      </div>
  );
}

function App() {
  let counters = [1,2,3,4,5,6,7,8,9,10,12]; //this value comes from database
  return (
    // <div>
    //   {/* <Button color="red" type="primary"></Button>
    //   <Button color="blue"></Button>
    //   <Button color="green"></Button> */}
    //   {/* <LmsButton type="primary"/> */}

    //   {/* {counters.map((counter)=>{
    //     return <Counter key={counter} />
    //   })} */}


    //   <Signup/>
    //   <Text/>
    //   <Heading/>
    //   <Button type="primary" shape='circle' style={{width:"100px"
    //   }}>SAMSUNG</Button>
    //   <AntForm/>
    // </div>

  <BrowserRouter>
  {/* <ErrorBoundary FallbackComponent={FallbackComponent}> */}
  <MainLayout/>
  {/* </ErrorBoundary> */}
  
  {/* <LayoutDemo/> */}
  </BrowserRouter>
    

    // <button>Click me</button>
  );
}

export default App;
