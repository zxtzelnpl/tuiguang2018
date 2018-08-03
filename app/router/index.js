import React from 'react'
import {HashRouter as Router, Route,Switch} from 'react-router-dom'
import Container from '../components/Container'

export default ()=> {
    return (
        <Router>
            <Switch>
                <Route exact path="/:web/:data" component={Container}/>
                <Route path="/" component={Container}/>
            </Switch>
        </Router>
    )
}