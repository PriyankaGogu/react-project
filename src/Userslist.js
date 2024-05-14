import {  Card, Image, Row } from "antd"
import Datatable from "./Datatable"

function Userslist() {
    var users = [
        { name: "Ashu Lekhi", role: "Trainer" },
        // { name: "Ashu Lekhi", role: "Trainer" , phone:11000 },
        { name: "Sumanth", role: "Developer" },
        // { name: "Sumanth", role: "Developer" , location:"Hyderaba" },
        // { name: "Sumanth", role: "Developer" , location:"Hyderaba" , email:"ashu.lekhi" , level:9 , id:242424 , tech:"React" },
    ]
    return (
        <>
            <h1>All Users</h1>
            <Datatable data={users} />
            {/* <Row>
            {users.map((each) => {
                var keys = Object.keys(each) //each will become second  //[name,role,phone] ,
                return (
                    <Card style={{width:200}}>
                        <Image height={150} src="usericon.jpeg" />
                        {
                            keys.map((eachkey)=>{
                               return <p>{each[eachkey]}</p>
                            })
                        }
                        {}
                    </Card>
                )

            })}
            </Row> */}
          
        </>
    )
}

export default Userslist