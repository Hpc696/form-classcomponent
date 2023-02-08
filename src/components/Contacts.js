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
            telefono: this.state.telefono,
            id: this.state.id
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

    resetR = async (reset) => { reset.preventDefault()

        const {nome, cognome, telefono, id}=this.state

        await fetch("http://localhost:3001/contacts?nome="+nome, {method: "DELETE", headers: {"Content-Type":"application/json"}, body:JSON.stringify({nome, cognome, telefono, id})})
            .then(() =>  this.setState({ contatt: [] }),  console.log(this.state))
            //.then(() => console.log("Deleted")
            .catch( err => console.error(err))
    
    }

    // removeR = async (remove) => { remove.preventDefault()
    
    //     const{ id } = this.state

    // await fetch("http://localhost:3001/contacts/"+id , { method: "DELETE", headers: {"Content-Type":"application/json"}, body: JSON.stringify({ id })})
    //     .then(() => console.log(this.state.contatt) , this.setState( { contatt: ["", this.state.contatt[1] , this.state.contatt[2]  ]}))
    //     .catch(err => console.error(err))
    // }
    removeR = (index, r) =>  {
        r.target.parentNode.parentNode.parentNode.deleteRow(index)
        //this.setState(this.state.contatt.filter((v, i) => i !== index))
    }


    render(){
        const {
            nome,
            cognome,
            telefono,
    
        } = this.state
        return(
            <div class="container text-center">
                
                <button class="btn btn-primary mt-5" onClick={this.showB}>{this.state.check ? "Nascondi" : "Mostra "} Rubrica</button>
            
                {/* <input type="text" value={ricerca} onChange={r => this.setState( {ricerca: r.target.value} ) } class="p-2" placeholder="Cerca per nome del contatto"></input> */}

                { this.state.check ? <div class="container">
                    <table class='table table-striped mt-4 rounded'>
                    <thead>
                        <th scope="col">Nome</th>
                        <th scope="col">Cognome</th>
                        <th scope="col">Telefono</th>
                    </thead>
                    <tbody>
                    { //console.log(this.state.contatt)
                        this.state.contatt.map( (c , index) => ( 
                            <tr key={index}>
                                <td>{c.nome}</td>
                                <td>{c.cognome}</td>
                                <td>{c.telefono}</td>
                                <td><button onClick={ r => this.removeR(index, r) } class="btn btn-danger">Elimina</button></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <div class="container">
                    <form onSubmit={this.addC} class="mt-3">
                            <label class="mr-2">Nuovo contatto: </label>
                            <input type="text" class="p-2 border border-primary rounded" value={nome} onChange={a => this.setState( {nome: a.target.value } )} placeholder="Inserisci nuovo nome"></input>
                            <input type="text" class="p-2 ml-1 border border-primary rounded" value={cognome} onChange={a => this.setState( {cognome: a.target.value } )} placeholder="Inserisci cognome"></input>
                            <input type="number" class="p-2 ml-1 border border-primary rounded" value={telefono} onChange={a=> this.setState( {telefono: a.target.value } )} placeholder="Inserisci telefono"></input>
                            <button type="submit" class="btn btn-primary mb-1 ml-2">Aggiungi</button>
                    </form>
                    <button onClick={this.resetR} class="btn btn-primary mb-1 ml-2">Svuota</button>
                </div>
                </div>
                : <div class="container">
        
                </div> }
                
            </div>
        )
    }
}
export default Contacts;