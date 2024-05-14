import logo from './logo.svg';
import './App.css';
import  Home from "./Home"
import Navbar from './Navbar';
import CarouselComponent from './Carousel';
import Userslist from './Userslist';
import Signup from './Signup';
import Meeting from './Meeting';
import NewMeeting from './StatefulMeeting';
import Attendance from './Attendance';
import { Input } from 'antd';
import {BrowserRouter,Routes , Route} from "react-router-dom"
import Login from './Login';
import Admin from './Admin';
import EditUser from './Edituser';
import Cakedetails from './Cakedetails';
import Search from './Search';
import A from './A';
import PageNotFound from './pageNotFound';
import Cart from './Cart';
import Checkout from './Checkout';
import Address from './Address';
import React from 'react';

export function App() {
  function demo(){
    alert("Clicked")
  }

  var money =100;
  var Test=React.createContext(100);
 
  // return (
  //   <>
  //   {/* <A money={money}>
  // using use Context hook </A>  */} 
  // <Test.Provider><A money={money}></A></Test.Provider>
    
  //  </>
  // )
  return (
    <div>
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/admin' element={<Admin></Admin>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/search' element={<Search></Search>}></Route>
      <Route path='/edit/:userid' element={<EditUser></EditUser>}></Route>
      <Route path='/details/:cakeid' element={<Cakedetails></Cakedetails>}></Route>
      <Route path='/checkout' element={<Checkout></Checkout>}>
        <Route path="address" element={<Address></Address>}></Route>
      </Route>
      <Route path='/*' element={<PageNotFound></PageNotFound>}></Route>
     </Routes>
     </BrowserRouter>     
    </div>
   
  );
}

// export default App;
