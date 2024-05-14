import B from "./B.js"
export default function A(props){

return(
    <>
    <h1>Inside A</h1>
    <B data={props.money}></B>
    </>
)

}