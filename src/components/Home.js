import { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component{
    constructor(props){
        super(props)
      }
    render(){
        return(
            <>

            <h1>Homepage</h1>

            <Link to={'/login'}><button>Go to login page</button></Link>
            
            <Link to={'/registration'}><button>Go to register page</button></Link>

            </>
            )
    }
}

export default Home;