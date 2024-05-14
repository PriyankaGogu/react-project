import { useContext } from "react"
import Test from "./App"

// export default function B(props){
    export default function B({money}){
   
    var money=useContext(Text);
    return(
        <>
        <h1>Inside B</h1>
        {/* <h3> {props.data} </h3> */}
       {money}
       <B money={money}></B>
        </>
    )
    
    }