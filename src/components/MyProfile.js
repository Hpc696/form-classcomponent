import { Component } from "react";
import { Link } from "react-router-dom";
import Contacts from "./Contacts";

class MyProfile extends Component{

//needs session storage

    render(){
        return(
            <div>
                <div class="d-flex justify-content-around">              
                    <h1 class="">My Account</h1>
                    <Link to={'/'} class=""><button class="btn btn-primary mt-4">LOGOUT</button></Link>
                </div>
                <Contacts></Contacts>
                
                
            </div>
        )
    }

}

export default MyProfile;