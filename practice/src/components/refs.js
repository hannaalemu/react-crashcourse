import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Proptypes checks properties and validates its types

const Test = (props) => {
    return(
        <>
        <h1>{props.str}</h1>
        <h1>{(props.bool  ? 'props.bool' : 'false')}</h1>
        </>
    )
}
Test.propTypes = {
    str: PropTypes.string,
    bool: PropTypes.bool
}
class App extends Component {
    render() {
        return (
            <div className="App">
                <Test str={"Hanna"}
                bool={false} />
            </div>
        )
    }
}

export default App;