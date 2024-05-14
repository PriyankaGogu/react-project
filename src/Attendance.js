import { Button, Input } from "antd";
import { useState } from "react";
import Datatable from "./Datatable";

export default function Attendance(){
    var user = {}
    var [people,setPeople] = useState([{
        name:"Ashu Lekhi"
    }])
    function handleName(e){
        user.name = e.target.value
    }
    function markAttendance(){
        // push the name into array 
        people.push(user)
         people = [...people]
        // update the state
        setPeople(people)
    }
    return (
        <>
        <Input onChange={handleName}></Input>
        <Button onClick={markAttendance}>Mark Attendance</Button>
        <Datatable data={people} />
        </>
    )
}