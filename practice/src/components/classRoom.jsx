import React, { Component } from 'react';
import Student from './student';
import AddStudent from './addStudent';

export default class ClassRoom extends Component {

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