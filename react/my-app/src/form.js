import React from 'react'

export default class Form extends React.Component {
    constructor() {
        super()
        this.state = { Name: "", LastName: "", email: "", Gender: "" }
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
                        Surname:
            <input type="text" />
                    </label><br />

                    <label>
                        Email:
            <input type="text" />
                    </label><br />

                    <label>
                        <select>
                    <option selected value="select">select</option>
            <option value="both">Both</option>
            <option value="male">male</option>
            <option value="female">Female</option>
          </select>
                        Gender:
            <input type="text" />
                    </label><br />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )

    }
}