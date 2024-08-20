import { useState } from "react";

function Signup(){

    const[name,setName] = useState();
    const[email,setEmail] = useState();
    const[password,setPassword] = useState();

    function handleSubmit(e){
        e.preventDefault();
        console.log("Form submitted"
        )
        alert(`Name: ${name} Email: ${email} Password: ${password}`)
        //send this values to database for processing or saving
    }
    return(<div>
       <form onSubmit={handleSubmit}>
        <input type="text" value ={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
        <button type="submit">Signup</button>
       </form>
    </div>)
}
export default Signup;