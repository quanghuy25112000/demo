import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Main from './Main'
import Child from './component/Child';
import Parent from './component/Parent';
 function Navigation(){
    return(
        <Router>
           <Route exact path="/">
               <Main />
           </Route>
           <Route exact path="/p" component={Parent}/>
               
           <Route exact path="/c" component={Child}/>
               
       </Router>
    )
}
export default Navigation