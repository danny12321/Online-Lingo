import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './home/Home';
import { Background } from '../components/style';

function Routing(props) {
    return (
        <Background>
            <Router>
                <Switch>
                    <Route path="/" component={Home} exact />

                </Switch>

                {props.children}
            </Router>
        </Background>
    )
}

export default Routing;