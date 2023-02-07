import { Component } from "react";
import { Link } from "react-router-dom";
import Contacts from "./Contacts";

class MyProfile extends Component{

//needs session storage

    render(){
        return(
            <div class="text-center">

                <h1>My Account</h1>
                
                <Contacts></Contacts>
                
                <Link to={'/'}><button class="btn btn-primary mt-2">LOGOUT</button></Link>
            </div>
        )
    }

}

export default MyProfile;