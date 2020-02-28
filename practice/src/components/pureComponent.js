//pure components don't set state, do unnecassary work,
//Setstate rerenders the component no matter if there;s a change or not, and we dont have to use shoult component update

import React, {Component, PureComponent} from 'react';

 class Temp extends PureComponent {
    render() {

        return (
            <div>HIIII</div>
            )
        } 
}

export default Temp;