import { Component } from "react";
import { Link } from "react-router-dom";
import Contacts from "./Contacts";

class MyProfile extends Component{

//needs session storage

    render(){
        return(
            <>

                <h1>My Account</h1>
                <Contacts></Contacts>
                <Link to={'/'}><button>LOGOUT</button></Link>
        
            </>
        )
    }

}

export default MyProfile;