import React from 'react'
import Header from './Header';
import { Link } from 'react-router-dom'

import './Default.css'

const Default = props => {
    return <div className="Default">
        <Header />
        <ul class="links">
            <li>
                <Link to="/people/1">Luke Skywalker</Link>
            </li>
        </ul>
        <div className="base">
            <div className="content">
                {props.children}
            </div>
        </div>
    </div>
}

export default Default;