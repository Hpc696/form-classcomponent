import { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component{
    
    render(){
        return(
            <>

            <h1>Homepage</h1>
            <div className="container text-center">
                <Link to={'/login'}><button class="btn btn-primary mt-4">Go to login page</button></Link>
                <Link to={'/registration'}><button class="btn btn-primary mt-4 ml-4">Go to register page</button></Link>
            </div>
            </>
            )
    }
}

export default Home;