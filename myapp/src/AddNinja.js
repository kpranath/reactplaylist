import React, { Component } from 'react'

export class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlfor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                    <label htmlfor="age">Age:</label>
                    <input type="number" id="age" onChange={this.handleChange} />
                    <label htmlfor="belt">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja
