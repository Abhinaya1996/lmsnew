//what is state, how to manage state
import { useState } from "react";

function Counter(){

    const[count,setCount] = useState(0)
    const[count1,setCount1] = useState(0)

    const decrement = ()=>{
        console.log(count)
        setCount(count-1)
    }
    const increment = ()=>{
        console.log(count)
        setCount(count+1)
    }

    return(
        <div>
            <h1>Counter : {count}</h1>
            <button onClick={decrement}> Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default Counter;