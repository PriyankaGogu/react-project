import { Col,Row } from "antd";
import { Link, Outlet } from "react-router-dom";

export default function Checkout(){

    return(<>
    <h1>Checkout Details</h1>
    <Row>
        <Col span={6}>
            <Link to="/checkout/address"><div>Address</div></Link>
            <div>Payment</div>
        </Col>

        <Col span={10}>
            <Outlet/>
        </Col>
    </Row>
    </>)
}