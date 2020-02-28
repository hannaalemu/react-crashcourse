import React from 'react';

// Functional components need props to be passed as a parameter to acess
const Student = (props) => {
    return(
        <div>
          Name: {props.name} Age: {props.age}
          <button onClick={props.delStudent}>Delete Student</button>
        </div>
    )
};

export default Student;