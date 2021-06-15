import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Films from '../../views/films/Films';
import Film from '../../views/films/Film';
import People from '../../views/films/People';
import PeopleMaisVezes from '../../views/films/PeopleMaisVezes';

const Content = props => {
    return (
        <Switch>
            <Route exact path="/peoples/maisvezes">
                <PeopleMaisVezes />
            </Route>
            <Route exact path="/films/:id">
                <Film />
            </Route>
            <Route exact path="/people/:id">
                <People />
            </Route>
            <Route exact path="/">
                <Films />
            </Route>
        </Switch>
    );

}

export default Content;