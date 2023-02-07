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
                        <tr key={c.id}>
                         <td>{c.nome}</td>
                         <td>{c.cognome}</td>
                         <td>{c.telefono}</td>
                        </tr>
                    ))
                    }
                    
                        
                    </tbody>
                </table>
                : <></>}
                <form onSubmit={this.addC}>
                    <input type="text" value={nome} onChange={a => this.setState( {nome: a.target.value } )} placeholder="Inserisci nuovo nome"></input>
                    <input type="text" value={cognome} onChange={a => this.setState( {cognome: a.target.value } )} placeholder="Inserisci cognome"></input>
                    <input type="number" value={telefono} onChange={a=> this.setState( {telefono: a.target.value } )} placeholder="Inserisci telefono"></input>
                    <button type="submit" >Aggiungi</button>
                </form>
            </>
        )
    }
}
export default Contacts;