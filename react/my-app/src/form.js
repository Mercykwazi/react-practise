import React from 'react'
import  Handle from './event-handler'

export default class Form extends React.Component {
    constructor() {
        super()
        this.state = { Name: "", LastName: "", email: "", Gender: "" }
    }
    newstate(label, newValue) {
        this.setState({ label: "" });
    }
    render() {
        return (
            <div>
                <form >
                    <label>
                        Name:{this.state.Name}
                        < Handler newstate={this.newstate.bind(this)} label="Name" />
                        <input type="text" />
                    </label><br />

                    <label>
                        Surname:
            <input type="text" />
                    </label><br />

                    <label>
                        Email:
            <input type="text" />
                    </label><br />

                    <label>
                        Gender:
            <input type="text" />
                    </label><br />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )

    }
}