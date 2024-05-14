import { Button } from "antd";
import { Component } from "react";

export default class NewMeeting extends Component{
    constructor(){
        super()
        this.state = {
            users:0
        }
    }

    joinMeeting =()=>{
        // update the ui we will update the state
        this.setState({
            users:this.state.users+1
        })
    }

    render(){
        return (
            <>
            <h1>People Joined :{this.state.users}</h1>
            <Button onClick={this.joinMeeting}>Joine Meeting</Button>
            </>
        )
    }
}