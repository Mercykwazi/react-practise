import React from 'react'

export default class Handle extends React.Component {
    eventHandler(e) {
        const title = e.target.value;
        this.props.changingState(this.props.label, title)
    }
    render() {
        console.log("props", this.props)
        return (
            <div>
                <input onChange={this.EventHandler.bind(this)} />
            </div>
        );
    }
}