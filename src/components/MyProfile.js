import { Component } from "react";
import { Link } from "react-router-dom";

class MyProfile extends Component{

//needs session storage

    render(){
        return(
            <>
                <h1>My Account</h1>
                
                {/* <h3>{}</h3> */}

                <Link to={'/'}><button>LOGOUT</button></Link>
            </>
        )
    }

}

export default MyProfile;