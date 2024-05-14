import {Button, Input, Menu} from "antd"
import { Link, useNavigate } from "react-router-dom"
import { SearchOutlined } from "@ant-design/icons"


function Navbar(){
    var searchtext
    var navigate = useNavigate()
    function search(){
        console.log("user issearching for" , searchtext)
        var url = "/search?q="+searchtext
        navigate(url)
        // navigate to the above url
    }

    function handleSearchText(e){
            searchtext = e.target.value
    }
    const items = [
        {label:(<Link to="/">Cake Gallery</Link>)},
        {label:"Contact Us"},
        {label:(
            <Link to="/login"><Button  type="primary">Login</Button></Link>
        )},
        {icon:(
            <>
            <Input placeholder="Search" onChange={handleSearchText}></Input> 
             <SearchOutlined onClick={search}></SearchOutlined>
            </>
        )},
        {label:(
            <Link to="/checkout"><Button>Checkout</Button></Link>
        )},
    ]
    return (
        <>
        <div>

            <Menu theme="dark" mode="horizontal" items={items} />
        </div>
        
        </>
    )
}

export default Navbar


