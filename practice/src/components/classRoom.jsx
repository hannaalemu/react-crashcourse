import React, { Component } from 'react';
import Student from './student';
import AddStudent from './addStudent';

export default class ClassRoom extends Component {

    //Constructor only runs once
    constructor() {
        super();

        this.state={
            students: [
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
    }

    componentWillMount() {
        //runs after contructor, render hasnt happened yet but we have initial state and props, we can set state here ex. if we wanna change state based on props. 
        //runs only once as well - things to do globally like window.innerwidth 
        console.log('component will mount')
    }

    componentDidMount () {
        //runs after render,
        //AJAX calls, subscriptions best place, we can also setstate but it would rerender
        //runs once as well
        console.log('component did mount')
    }

    componentWillReceiveProps() {

    }

    shouldComponentUpdate() {
        //have to return true or false
    }

    componentWillUpdate() {
        //after initial run, after should update runs
        // similar to did mount
        //dont set state
    }

    componentDidUpdate() {
        //has previous props and previus state
    }

    componentWillUnmount() {
        //to undo things, clean up
        //there is no component did unmount
    }

    
    deleteStudent = (index, event) => {
        const studentsCopy = Object.assign([], this.state.students);

        studentsCopy.splice(index, 1);

        this.setState({students:studentsCopy})
    }

    addStudent = (event) => {
        const studentsCopy = Object.assign([], this.state.students);

        let newStudent = event.target.value;
        console.log(newStudent);
    }
    render() {
        //runs after component will mount, try not to set state here\
        console.log('render')
        return (
            <>
            <div>
                <h1>{this.state.title}</h1>
                {
                    this.state.students.map((student, index) => {
                        return <Student name={student.name} age={student.age} delStudent={this.deleteStudent.bind(this, index)} />
                    })
                }
            </div>
            <div>
                <AddStudent addNewStudent={this.addStudent.bind(this)}/>
            </div>
                </>
        )
    }
}