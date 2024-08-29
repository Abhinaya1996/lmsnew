//what is state, how to manage state
import { Spin } from "antd";
import { useEffect, useState } from "react";
import { LoadingOutlined } from '@ant-design/icons';
import CounterWarning from "./CounterWarning";

function Counter() {

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [isloading, setIsLoading] = useState(false)
    const [showWarning, setShowWarning] = useState(true)

    const closeWarning = () => {
        setShowWarning(false)
    }
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
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
        console.log("printing")
    }, []);

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
    if (count > 10) {
        throw new Error("Count is greater than 10")
    }


    return (
        <div>
            <div>{counter}</div>
            <button onClick={decrement}> Decrement</button>
            <button onClick={increment}>Increment</button>
            {count === 9 && showWarning ? <CounterWarning close={closeWarning}/> : null}
        </div>
    )
}
export default Counter;