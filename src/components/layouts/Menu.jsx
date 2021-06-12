import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'

const Menu = props => {
    return <>
        <div className="Menu">
            <ul>
                <li>
                    <Link to="/">Filmes</Link>
                </li>
            </ul>
        </div>
    </>
}

export default Menu;