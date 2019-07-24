import React, { Component } from 'react'
import NavBar from './NavBar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import CreateSearch from '../pages/CreateSearch'
import AddSong from '../pages/AddSong'

class Header extends Component {
    render() {
        return (
            <div>  
              <Router>
              <NavBar/>
                <Switch>
                    <Route path='/' exact component={CreateSearch}/>
                    <Route path='/addSong' exact component={AddSong}/>
                </Switch>
              </Router>
            </div>
        )
    }
}

export default Header
