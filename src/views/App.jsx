import React from 'react'
import Content from '../components/layouts/Content';
import { BrowserRouter as Router } from 'react-router-dom'

const App = props => {
    return (
        <div class="App">
            <Router>
                <Content />
            </Router>
        </div>
    );
}

export default App;