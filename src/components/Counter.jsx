//what is state, how to manage state
import { Spin } from "antd";
import { useEffect, useState } from "react";
import { LoadingOutlined } from '@ant-design/icons';

function Counter() {

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [isloading, setIsLoading] = useState(false)
    const decrement = () => {
        setIsLoading(true)
        setCount(count - 1)
    }
    const increment = () => {
        setIsLoading(true)
        setCount(count + 1)
    }
    useEffect(() => {
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false)
        },2000)
        console.log("printing")
    },[]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }, [isloading]);


    useEffect(() => {
        return () => { 
            console.log('Component unmounted'); 
        }; 
    }, []);
    const spinner = <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />;
    // const spinner = <h1>Loading..</h1>
    const counter = <h1>Counter:{count}</h1>

    return (
        <div>
            <div>{isloading ? spinner : counter}</div>
            <button onClick={decrement}> Decrement</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
export default Counter;