import { Badge, Card, Image } from "antd";
import { Link } from "react-router-dom";

// function Cake(props) {
//     var Component
//     if(props.data.tag){
//         Component =  <Badge.Ribbon size="small" color="green" text={props.data.tag} >
//         <Card style={{ width: 250, marginLeft: 40 }}>
//             <Image preview={false} src={props.data.image} width={200}></Image>
//             <p>{props.data.name}</p>
//             <p>{props.data.price}</p>
//         </Card>
//     </Badge.Ribbon>
//     }
//     else{
//         Component =  <Card style={{ width: 250, marginLeft: 40 }}>
//         <Image preview={false} src={props.data.image} width={200}></Image>
//         <p>{props.data.name}</p>
//         <p>{props.data.price}</p>
//     </Card>
//     }
//     return (
//     Component
//     )
// }

function Cake(props){
    var tag
    if(props.data.tag){
        tag = <p>{props.data.tag}</p>
    }
    else{
        tag = null
    }
    return (
        <Card style={{ width: 300, marginLeft: 40 }}>
        <Link to={"/details/"+props.data.cakeid}><Image preview={false} height={200} src={props.data.image} width={250}></Image></Link>
        <p>{props.data.name}</p>
        <p>{props.data.price}</p>
        {props.data.tag && <p>{props.data.tag}</p>}
    </Card>
    )
}

export default Cake