import { Component } from "react";

class Contacts extends Component{

    state = {
        contatt:[],
        check:false
    }

    showB = (show) => { show.preventDefault()

        this.setState( prevState => ({ check: !prevState.check })   )

        if (!this.state.check){

            fetch("http://localhost:3001/contacts").then((req) => { 
                    return req.json();
                    
                }).then((res) => {

                    //console.log(res)

                    this.setState({ contatt: res })
                
                }).catch((error) => alert(error))
        }
    }

    render(){
    
        return(
            <>
                <button onClick={this.showB}>{this.state.check ? "Nascondi" : "Mostra "} Rubrica</button>
                { this.state.check ? <table>
                    <thead>
                        <th>Nome</th>
                        <th>Cognome</th>
                        <th>Telefono</th>
                    </thead>
                    <tbody>
                    { //console.log(this.state.contatt)
                     this.state.contatt.map( c => ( 
                        <tr key={c.telefono}>
                         <td>{c.nome}</td>
                         <td>{c.cognome}</td>
                         <td>{c.telefono}</td>
                        </tr>
                    ))
                    }
                    
                        
                    </tbody>
                </table>
                : <></>}
            </>
        )
    }
}
export default Contacts;