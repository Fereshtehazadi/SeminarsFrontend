import React, { Component } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import Seminars from '../Pages/Seminars/Seminars'
import Main from '../Pages/Main/Main'
import SignUp from '../Pages/SignUp/SignUp'
import Confirmation from '../Pages/Confirmation/Confirmation'

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
                    <SignUp onAddedVisitor={() => this.fetchOwners()}   seminarId={query.get("id")}/>
                </Route>
                <Route path="/Confirmation">
                    <Confirmation/> 
                </Route>              
                 <Route path="/">
                    <Main/>
                </Route>
            </Switch>
        </div>
    );
}
