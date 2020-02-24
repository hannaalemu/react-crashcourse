import React from 'react';

// Functional components need props to be passed as a parameter to acess
const User = (props) => {
    return(
        <div>
          <h2>Hi, I am {props.children}. I am {props.age} years old!!</h2>
        </div>
    )
};

export default User;