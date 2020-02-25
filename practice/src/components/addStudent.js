import React, { Component } from 'react';

export default class AddStudent extends Component {

    constructor(props) {
        super(props);

       this.state={
            name: '',
            age: ''
        }
    }

    updateName = (event) => {
        let newName = event.target.value;

        this.setState({name: newName});
    }

    updateAge = (event) => {
        let newAge = event.target.value;

        this.setState({age: newAge});
    }

    render() {
        return(
            <>
            <h1>Add new Student!!</h1>
            <form>
            <input value={this.state.name} onChange={this.updateName}/>
            <input value={this.state.age} onChange={this.updateAge}/>

            <button onClick={this.props.addNewStudent}>Add Student</button>
            Name: {this.state.name} Age: {this.state.age}
            </form>
            </>
        );
    }
};