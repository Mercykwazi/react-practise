import React from 'react'

export default class Form extends React.Component {
    constructor(){
        super()
        this.state={Name:"kwazi",LastName:"",email:"",Gender:""}
    }
    render() {
        return (
            <div>
                {this.state.Name}
              
            <form >
                <label>
                    Name:
            <input type="text" />
                </label><br />
                <label>
                    last Name:
            <input type="text" />
                </label>
                <label>
                    email:
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