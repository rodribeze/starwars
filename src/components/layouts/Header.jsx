import React from 'react'

import logo from "../../logo.png"
import './Header.css'

const Header = props => {
    return (
        <div className="Header">
            <img src={logo} alt="Logo" />
        </div>
    )
}

export default Header;