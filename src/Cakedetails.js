import { Button, Card, Col, Image, Row } from "antd"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export default function Cakedetails(){
    var params = useParams()
    var navigate= useNavigate();
    var [cakedetails,setCakedetails] = useState({})
    //var label=userRef();

    function addToCart(){
        //label.current.innerHTML="Cake Message"
        if(localStorage.token){
        var requestJson = {
            name:cakedetails.name,
            cakeid:cakedetails.cakeid,
            price:cakedetails.price,
            image:cakedetails.image,
            weight:1,
        }
        axios({
            url:process.env.REACT_APP_API_URL + "/addcaketocart",
            method:"post",
            data:requestJson,
            headers:{
                Authorization:localStorage.token// that token which u got while logiing in 
            }
        }).then((response) => { 
            console.log("response for cart api"+response.data)
            if(response.data.data){
            // alert("Added to Cart");
            navigate("/cart")
         }}, (error) => { console.log("Error", error) })
    }    
}
    useEffect(()=>{
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api"+ "/cake/"+params.cakeid,
            method:"get"
        }).then((response)=>{
            setCakedetails(response.data.data)
        },(error)=>{console.log(error)})
    } ,[])

    return (
        <div>
            <h1>Details for cake: {cakedetails.name} </h1>
            <Row>
            <Col>
            <Card style={{ width: 450, marginLeft: 40 }}>
            <Image preview={false} src={cakedetails.image} width={400} height={300}></Image>
            </Card>
            </Col>

            <Col>
            <Card style={{ width: 500, height:300 ,marginLeft: 40 }}>
                <div>
             <label> Rating: <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" aria-label="Rating"/>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
            </label>
            </div>
             <p>Name : {cakedetails.name}</p>
             <p>Price: {cakedetails.price}</p>
             <p>Review: {cakedetails.review}</p>
             <p>weight: {cakedetails.weight} kg</p>
             <p>Description: {cakedetails.description}</p>
             <p>
             <Button onClick={addToCart.bind(null, cakedetails)} type="primary">Add To Cart</Button>
             </p>
             </Card>
             </Col>
            </Row>
        </div>
    )
}

