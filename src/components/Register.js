import { Component } from "react";


class Register extends Component{
    state = {
        username:"",
        password:""
    }

    regSubmit = async (reg) => { reg.preventDefault() 
        
        const {username, password} = this.state
    
        const respons = await fetch("http://localhost:3001/profile", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify({username,password}) } )
    
        const result = await respons.json() 

        //console.log(respons)
        //console.log(result)

        if(respons.status === 201){ window.location.href = '/login' ; console.log("Registred") }
        else{ alert("ERROR") }
    }

    usernameChange = (usern) => { this.setState({ username: usern.target.value }) }

    passwordChange = (psw) => { this.setState({ password: psw.target.value }) }


    render(){
        
        const {username,password} = this.state

        return(
            <>
                <h1>REGISTER</h1>

                <form onSubmit={this.regSubmit}>
                
                    <input type="text" value={username} onChange={this.usernameChange} placeholder="Inserisci Username"></input>
                
                    <input type="password" value={password} onChange={this.passwordChange} placeholder="Inserisci password"></input>
                
                    <button type="submit">REGISTER</button>
                
                </form>
            </>
        )
    }
}


export default Register;