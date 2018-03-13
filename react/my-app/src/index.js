import React from 'react';
import ReactDom from 'react-dom'

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { value: '' };
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handleChange(event) {
    //     this.setState({ value: event.target.value });
    // }
    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    // }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
            <input type="text"  />
                </label><br/>
                <label>
                   last Name:
            <input type="text" />
                </label>
                <label>
                    email:
            <input type="text"  />
                </label><br/>
                <label>
                    Name:
            <input type="text"  />
                </label><br/>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
ReactDom.render(<NameForm />,document.getElementById("root"))