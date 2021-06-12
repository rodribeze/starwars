import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Films from '../../views/films/Films';
import Film from '../../views/films/Film';

const Content = props => {
    return (
        <Switch>
            <Route path="/films/:id">
                <Film />
            </Route>
            <Route path="/">
                <Films />
            </Route>
        </Switch>
    );

}

export default Content;