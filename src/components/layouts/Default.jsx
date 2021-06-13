import React from 'react'
import Header from './Header';

import './Default.css'

const Default = props => {
    return <div className="Default">
        <Header />
        <div className="base">
            <div className="content">
                {props.children}
            </div>
        </div>
    </div>
}

export default Default;