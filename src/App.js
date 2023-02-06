import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import MyProfile from "./components/MyProfile";
class App extends Component{
  
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> }></Route>
          <Route path="/registration" element={ <Register/> }></Route>
          <Route path="/login" element={ <Login/> }></Route>
          <Route path="/myaccount" element= { <MyProfile/> }></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
