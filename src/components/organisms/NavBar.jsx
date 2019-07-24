import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NavBar extends Component {
    render() {
        return (
            <div className='nav-bar-div'>
                <nav>
                    <span>MUSIC STORE</span>
                    <ul>
                        <li>
                            <Link to='/addSong' className="navLi">ADD A SONG</Link>
                        </li>
                        <li>
                            <Link to='/' className="navLi">CREATE SEARCH</Link>
                        </li>
                    </ul>
                   
                </nav>
            </div>

        )
    }
}

export default NavBar
