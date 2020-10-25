import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Seminars from '../Pages/Seminars/Seminars'
import Main from '../Pages/Main/Main'
import SignUp from '../Pages/SignUp/SignUp'

export default class Body extends Component {
    render() {
        return (
            <div className="body">
                <Switch>
                    <Route path="/seminars">
                        <Seminars/>
                    </Route>
                    <Route path="/SignUp">
                        <SignUp/>
                    </Route>
                    <Route path="/">
                        <Main/>
                    </Route>
                </Switch>
            </div>
        )
    }
}
