import { Component } from "react";
import { Link } from "react-router-dom";


class Register extends Component{
    state = {
        username:"",
        password:""
    }

    regSubmit = async (reg) => { reg.preventDefault() 
        
        const {username, password} = this.state
    
        const respons = await fetch("http://localhost:3001/profile", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({username,password}) } )
    
        //console.log(respons)
        //console.log(result)

        if(respons.status === 201){ window.location.href = '/login' ; alert("Registration successfull") }
        else{ alert("ERROR") }
    }

    usernameChange = (usern) => { this.setState({ username: usern.target.value }) }

    passwordChange = (psw) => { this.setState({ password: psw.target.value }) }

    render(){
        
        const {username,password} = this.state

        return(
            <>
                <h1>Registration</h1>

                <div class="container text-center">

                    <form onSubmit={this.regSubmit}>
                    
                        <input type="text" value={username} onChange={this.usernameChange} placeholder="Inserisci Username" class="p-2 border border-primary rounded"></input>
                    
                        <input type="password" value={password} onChange={this.passwordChange} placeholder="Inserisci password" class="p-2 border border-primary rounded ml-2"></input>
                    
                        <button type="submit" class="btn btn-primary ml-4 mb-1">REGISTER</button>
                    
                    </form>
                </div>

                <div class="container text-center">
                    <Link to={'/'}><button  class="btn btn-primary mt-4">BACK TO HOME</button></Link>
                </div>
            </>
        )
    }
}


export default Register;