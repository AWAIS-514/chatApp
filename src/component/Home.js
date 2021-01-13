
import React, { Component } from "react";

import {connect} from "react-redux";

import {facebook,google} from "../store/acion/index"
 class Home extends Component{

render(){


  if (localStorage.getItem("name")) {
    
   this.props.history.push("/chat")
   console.log("if");
   
  }
 

  return(
    <div>
      
      <div className="pici">
    
    <h1>Prox-chat</h1>
   
    </div>


  
    
    
     <div className="btni" onClick={()=>this.props.facebook(this.props.history)}><span><h4>Login via Facebook</h4></span><em></em></div>
     <div className="btni" onClick={()=>this.props.google(this.props.history)}><span><h4>Login via google</h4></span><em></em></div>
  
    </div>

  )
}

}
const mapStateToProps = (state) => {
  return {

  
  
  }
}

function mapDispatchToProp(dispatch) {
  return ({
   
 facebook:(history)=>{
  dispatch(facebook(history))
},
google:(history)=>{
  dispatch(google(history))
}

     
  })
}


export default connect(mapStateToProps,mapDispatchToProp)(Home);