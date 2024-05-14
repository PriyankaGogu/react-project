import { Row,Col } from "antd";
import Cake from "./Cake";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function Cart(){
    var [cartItems, setCartItems] = useState();
    useEffect(() => {
        axios({
            url: process.env.REACT_APP_API_URL+"/cakecart",
            method: "get",
            headers: {
                Authorization: localStorage.token
            }
        }).then((response) => {
            setCartItems(response.data.data)
        }, () => { })
    }, [])

    if (!cartItems) {
        return (<Loader />)
    }
    console.log("?***********"+cartItems)
    return (
        <Row>
            {
                cartItems.map((cartItem) => {
                    return (
                        <Col>
                            <Cake data={cartItem} />
                        </Col>
                    )
                }
                )}
        </Row>
    )
}