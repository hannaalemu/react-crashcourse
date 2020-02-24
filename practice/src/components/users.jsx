import React, { Component } from 'react';
import User from './user';

export default class Users extends Component {

    state={
        users: [
        {name: "Hanna", age: 22},
        {name: "Nati", age: 28},
        {name: "Tg", age: 30},
        {name: "Mike", age: 40},
        {name: "John", age: 35},
        {name: "Chris", age: 18},
        {name: "Ally", age: 35},
        {name: "Steve", age: 78},
        ],
        title: "Hi Kids, this is everyone in our class today."
    }

    makeUsOlder = () => {
        const newState = this.state.users.map((user) => {
            let tempUser = user;
            tempUser.age +=10;

            return tempUser;
        });

        this.setState({newState});
    };

    makeUsYounger = () => {
        const newState = this.state.users.map((user) => {
            let tempUser = user;
            tempUser.age -= 10;

            return tempUser;
        });

        this.setState({newState});
    };

    render() {
        return (
            <div>

                <h1>{this.state.title}</h1>
                <button onClick={this.makeUsOlder}>Make us 10 years older!</button>
                <button onClick={this.makeUsYounger} >Make us 10 years Younger!</button>
                {/* Whatever is passed inside the component (Like age)is available as props to the user component (props.age), what's passed in between the component tags is available as props.children to the user component  */}

            {this.state.users.map((user) => {
            return  <User age={user.age} >{user.name}</User>
            })}
                
               
            </div>
        )
    }
}