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

    addC = async (add) => { add.preventDefault()
        
        const newContact = {
            nome: this.state.nome,
            cognome: this.state.cognome,
            telefono: this.state.telefono
        }
    
        await fetch("http://localhost:3001/contacts",{
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(newContact)
        
        }).then((res) => res.json())

        .then((res) => {

            this.setState({
                contatt: [...this.state.contatt, res],
                nome:"",
                cognome:"",
                telefono:""
            })
            
        }).catch((error) => console.log(error))

    }

    render(){
        const {
            nome,
            cognome,
            telefono
        } = this.state
        return(
            <div class="container text-center">
                <button class="btn btn-primary mt-5" onClick={this.showB}>{this.state.check ? "Nascondi" : "Mostra "} Rubrica</button>
            
                
                { this.state.check ? <div class="container">
                    <table class='table table-striped mt-4'>
                    <thead>
                        <th scope="col">Nome</th>
                        <th scope="col">Cognome</th>
                        <th scope="col">Telefono</th>
                    </thead>
                    <tbody>
                    { //console.log(this.state.contatt)
                     this.state.contatt.map( c => ( 
                        <tr key={c.id}>
                         <td>{c.nome}</td>
                         <td>{c.cognome}</td>
                         <td>{c.telefono}</td>
                        </tr>
                    ))
                    }
                    
                        
                    </tbody>
                </table>
                <div class="container">
                    <form onSubmit={this.addC} class="mt-3">
                            <label class="mr-2">Nuovo contatto: </label>
                            <input type="text" class="p-2 " value={nome} onChange={a => this.setState( {nome: a.target.value } )} placeholder="Inserisci nuovo nome"></input>
                            <input type="text" class="p-2 ml-1" value={cognome} onChange={a => this.setState( {cognome: a.target.value } )} placeholder="Inserisci cognome"></input>
                            <input type="number" class="p-2 ml-1" value={telefono} onChange={a=> this.setState( {telefono: a.target.value } )} placeholder="Inserisci telefono"></input>
                            <button type="submit" class="btn btn-primary m-2">Aggiungi</button>
                    </form>
                </div>
                </div>
                : <div class="container">
        
                </div> }
                
            </div>
        )
    }
}
export default Contacts;