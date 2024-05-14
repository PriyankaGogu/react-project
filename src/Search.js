import { useSearchParams } from "react-router-dom"
import {useEffect,useState} from "react";
import Cake from "./Cake";
import axios from "axios";
import {Row} from "antd"
 
export default function Search(){
    var [query,setQuery] = useSearchParams()
    var text = query.get("q");
var [cake,setCake]=useState();
useEffect(()=>{searchCake()},[])


function searchCake(){
axios({
            url:"http://apibyauw.eu-4.evennode.com/api" +"/searchcakes?q="+text,
            method:"get"
        }).then((response)=>{
            console.log("Response from register api" , response.data.data)
            setCake(response.data.data)
        },(error)=>{
            console.log("Error from register api is" , error)
        })
}
    
return(<>
<Row>
                {
                    cake?.map((each,index)=>{
                        return <Cake data={each} key={index} />
                    })
                }

            </Row>
</>)
}