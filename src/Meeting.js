import { Button } from "antd"
import { useState } from "react"

function Meeting() {
    var [users,setUsers] = useState(0)
    var count = 0

    function joinMeeting(){
        setUsers(users+1)
    }

    return (
        <>
            <Button onClick={joinMeeting} type="primary" >Join Meeting</Button>
            People joined : <h1>{users}</h1>
        </>

    )
}

export default Meeting 