import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import App from '../App'
import NoMatch from '../components/NoMatch'
import Will from '../components/Will'


import * as React from 'react'

export default class RouterApp extends React.Component {
    public render() {
        return (
            <Router>
                <Switch>
                    <Route exact={true} path="/">
                        <App />
                    </Route>
                    <Route path="/will">
                        <Will />
                    </Route>

                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </Router>

        )
    }
}

