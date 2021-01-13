import React, { Component } from 'react';
import chat from '../component/chat/chat';
import Home from "../component/Home";
import sub from "../component/chat/sub/subchat";

import {
  BrowserRouter as Router,Route,} from "react-router-dom";


class RouterLink extends Component{
render(){


  return(
 <Router>
     <Route exact path='/' component={Home} />  
     <Route exact path="/chat" component={chat} />
   
     <Route exact path="/subchat" component={sub} />

 </Router>



  )
}
}


export default RouterLink;
