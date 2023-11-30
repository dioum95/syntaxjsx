let n = 0

function numberFormat(n) {
    return n.toString().padStart(2, '0')
}

function render() {
    const items = [
        'Tache 1',
        'Tache 2',
        'Tache 3'
    ] 
    const title = <React.Fragment><h1 className ="title">
        Bonjour les gens <span>{n}</span>
    </h1>
    <ul>{items.map((item, k) => <li key={k}>{item}</li>)}</ul>
    </React.Fragment>

    ReactDOM.render(title, document.querySelector('#app'))
}

render()

window.setInterval(() => {
    n++
    render()
}, 1000)

/*
import React, { Component } from 'react';

class Todolist extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    removeOne() {
        this.setState({
            count: this.state.count - 1
        })
    }

    addOne() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return(
            <div>
                <h1>Welcome{this.props.name}</h1>
                <p>Mon compteur: {this.state.count}</p>
                <button onClick={() => this.addOne()}>Ajouter 1</button>
                <button onClick={this.removeOne.bind(this)}>Enlever 1</button>
            </div>
        )
    }
}

export default Todolist ;
*/