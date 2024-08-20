// component creation, props and its uses, how to define props
export function Button(props){
    let a=0;
    function handleClick(){
        console.log('Button clicked');
    }
    console.log(props.type)
    let buttonColor = props.color;
    console.log(buttonColor);
    let button=<button style={{backgroundColor:buttonColor}} onClick={handleClick}>{a}</button>;
    return button;
}

//conditional rendering with if condition
export function LmsButton(props){
    let ab;
    if(props.type==="primary"){
         ab=<button 
    style={{
        color:'white',
        padding:'8px',
        backgroundColor:'#6565f9'}}>
            Click me</button>;
    }else{
         ab=<button 
    style={{
        color:'white',
        padding:'8px',
        backgroundColor:'black'}}>
            Click me</button>;
    }
    return ab;
}

//conditional rendering with ternary operator
export function lmsButtonTwo(props){
    let buttonBlue = <button 
    style={{
    color:'white',
    padding:'8px',
    backgroundColor:'#6565f9'}}>
        Click me</button>;
    let buttonBlack = <button 
        style={{
         color:'white',
            padding:'8px',
            backgroundColor:'black'}}>
        Click me</button>
    return (
        <div>
        {props.type==="primary"?buttonBlue:buttonBlack}
        </div>)
}
export default LmsButton;