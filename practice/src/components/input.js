import React, { Component } from 'react';

export default class AddUser extends Component {

    state={
        name: '',
        age: ''
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
            <input value={this.state.name} onChange={this.updateName}/>
            <input value={this.state.age} onChange={this.updateAge}/>

            Name: {this.state.name} Age: {this.state.age}
            </>
        );
    }
};