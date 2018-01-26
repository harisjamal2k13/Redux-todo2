import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Todo  from './components/todo'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
          <Todo/> 
        
                </div>
            </Router>
        )
    }
}

export default Routers;