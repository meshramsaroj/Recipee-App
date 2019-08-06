import React, { Component } from 'react'



class StateClass extends Component {
    constructor() {
        super()
        this.state = {
            Message: "Welcome to DTI",
            count : 0
        }
    }

    changeMessage() {
        this.setState( {
            Message: "Thanks for Comming",

        },)
    }


    render() {
        return (
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={() => this.changeMessage()}> Subscribe</button>
            </div>

        )
    }
}

export default StateClass