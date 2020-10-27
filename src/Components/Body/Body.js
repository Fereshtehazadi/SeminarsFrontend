import React, { Component } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Seminars from '../Pages/Seminars/Seminars'
import Main from '../Pages/Main/Main'
import SignUp from '../Pages/SignUp/SignUp'

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  
 
export default function Body() {
    let query = useQuery();
    return (
        <div className="body">
            <Switch>
                <Route path="/seminars">
                    <Seminars/> 
                </Route>
                <Route path="/SignUp">
                    <SignUp seminarId={query.get("id")}/>
                </Route>
                <Route path="/">
                    <Main/>
                </Route>
            </Switch>
        </div>
    );
}
