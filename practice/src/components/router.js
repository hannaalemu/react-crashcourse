import React, { Component } from 'react';
import '../App';
import { BrowserRouter as Router, Route , Link, NavLink} from 'react-router-dom';


const User = ({match}) => { 
    return(
        <h1>Welcome User {match.params.username}</h1>
    )
}

class App extends Component {
    render() {
        return(
            <Router>
                <div className="Appp">
                    <ul>

                    <li><NavLink to="/">Home</NavLink></li>
                    <li> <Link to="/about">About</Link></li>
                    <li><Link to="/user/hanna">Hanna</Link></li>
                    </ul>

                    <Route path="/" exact render={
                        ()=> {
                            return <h1>Welcome Home</h1>
                        }
                    }/>
                    <Route path="/about" exact render={
                        ()=> {
                            return <h1>Welcome About</h1>
                        }
                    }/>
                     <Route path="/user/:username" exact component={User}
    
                    />
                </div>

            </Router>
            
        )
    }
}

export default App;