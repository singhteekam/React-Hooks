import { useState } from "react";
import '../css/UseStatePage.css'

export const UseStateHookExample1 = ()=>{

    const [name, setName] = useState("");

    return(
        <>
            <div className="exampleContent">
                <h4>My name is {name}</h4>
                <button onClick={()=> setName("Teekam")}>Click me</button>
            </div>
        </>
    );
}


export const UseStateHookExample2 = () => {

    const [counter, setCounter] = useState(0);

    return (
        <>
            <div className="exampleContent">
                <h4>Counter Value: {counter}</h4>
                <button onClick={() => setCounter(counter + 1)}>Increase Counter</button>
                <br />
                <button onClick={() => setCounter(counter - 1)}>Decrease Counter</button>
            </div>
        </>
    );
}


export const UseStateHookExample3 = () => {

    const [info, setInfo] = useState({
        firstName:"Teekam",
        lastName:"Singh"
    });

    const handleChange=(event)=>{
        const name= event.target.name;
        const value= event.target.value;
        setInfo(values=>({
            ...values, [name]: value
        }))

        //OR

        // setInfo(values=>{
        //     return {...values, name: value}
        // })
    }

    return (
        <>
            <div className="exampleContent">
                <h4>My name is {info.firstName} {info.lastName}</h4>
                First Name:<input type="text" name="firstName" value={info.firstName} onChange={handleChange} />
                <br />
                Last Name: <input type="text" name="lastName" value={info.lastName} onChange={handleChange} />
                <h5>We have used an object in this example to change first and last name using spread operator</h5>
            </div>
        </>
    );
}

export const UseStateHookExample4 = () => {

    const [textarea, setTextArea] = useState("");

    const handleChange = (event) => {
        setTextArea(event.target.value);
    }

    return (
        <>
            <div className="exampleContent">
                <textarea value={textarea} onChange={handleChange} cols="50" rows="5"></textarea>
                <p>TextArea: {textarea}</p>
            </div>
        </>
    );
}