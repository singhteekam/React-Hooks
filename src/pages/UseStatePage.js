import {
    UseStateHookExample1, 
    UseStateHookExample2, 
    UseStateHookExample3,
    UseStateHookExample4} from "../hooks/UseStateHook";
import '../css/UseStatePage.css'

const UseStatePage=()=>{
    return(
        <>
            <h2 className="mainHeading">UseState Hook</h2>
            <hr />

            <h3 className="exampleHeading">Example 1:</h3>
            <UseStateHookExample1 />
            <hr />

            <h3 className="exampleHeading">Example 2:</h3>
            <UseStateHookExample2 />
            <hr />

            <h3 className="exampleHeading">Example 3:</h3>
            <UseStateHookExample3 />
            <hr />

            <h3 className="exampleHeading">Example 4:</h3>
            <UseStateHookExample4 />
            <hr />
        </>
    )
}

export default UseStatePage;