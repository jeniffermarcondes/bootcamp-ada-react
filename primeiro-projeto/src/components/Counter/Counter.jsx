import React from "react";

export class Counter extends React.Component{
    constructor(){
        super();
        // this.contador = 0;
        this.state = {contador: 0, name: '', password: ''};
    }

    render(){
        return (
            <div style={{marginTop: "100px", marginLeft: "800px"}}>
                <h1 style={{paddingLeft: "160px"}}>{this.state.contador}</h1>

                <div style={{paddingLeft: "120px"}}>
                    <button onClick={() => {
                        // ! this.contador = this.contador - 1
                        this.setState({contador: this.state.contador - 1})
                    }}
                        >Diminuir</button>
                    <button onClick={() => {
                        // ! this.contador = this.contador + 1
                        this.setState({contador: this.state.contador + 1})
                        }}
                        >Aumentar</button>
                </div>

                <form style={{marginTop: "10px", marginBottom: "50px"}}>
                    <input type="text" placeholder="Nome" value={this.state.name} onChange={(event) => {this.setState({ name: event.target.value})}}/>
                    <input type="password" placeholder="Senha" value={this.state.password} onChange={(event) => {this.setState({ password: event.target.value})}}/>
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}