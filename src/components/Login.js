import { Component } from "react";

class Login extends Component{
    state = {
        username:"",
        password:""
    }

    logSubmit = (log) => { log.preventDefault()

        const {username, password} = this.state;

        if(this.valid()){

            console.log("input ok");
            fetch("http://localhost:3001/profile?username="+username).then((req) => { 
                return req.json();
                
            }).then((res) => {

                console.log(res)
                

                if(Object.keys(res).length!==0){

                    if(res[0].password === password){
                        alert("SUCCESS")
                        window.location.href= "/myaccount"
                    } else { 
                        alert("Password wrong")
                    }
                } else {
                    alert("Username not found")
                }
            
            }).catch((error) => alert(error))
        }
    }
    
    valid = () => {

        let check = true;
        
        if(this.state.username===null || this.state.username===""){ check=false; alert("USERNAME!")}
        
        if(this.state.password===null || this.state.password===""){ check=false; alert("PASSWORD!")}

        return check;
    }
       
    usernameChange = (usern) => { this.setState({ username: usern.target.value }) }

    passwordChange = (psw) => { this.setState({ password: psw.target.value }) }


    render(){
        
        const {username,password} = this.state

        return(
            <>
                <h1>LOGIN</h1>

                <form onSubmit={this.logSubmit}>
                
                    <input type="text" value={username} onChange={this.usernameChange} placeholder="Inserisci Username"></input>
                
                    <input type="password" value={password} onChange={this.passwordChange} placeholder="Inserisci password"></input>
                
                    <button type="submit">LOGIN</button>
                
                </form>
            </>
        )
    }
}

export default Login;