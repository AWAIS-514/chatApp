
import React, { Component } from "react";
import {connect} from "react-redux";
import {dataRecieve,nulli} from "../../store/acion/index"

import  "../app.css";
 class chat extends Component{
  componentDidMount() {
  this.props.nulli();
    this.props.dataRecieve();
    
 }
 chatUser=(data,history)=>{
   
   localStorage.setItem("CurrentUser",data.name)
   localStorage.setItem("currentImage",data.photo)
   localStorage.setItem("currrentUid",data.uid)
history.push("/subchat")
 }
logout=(history)=>{
  localStorage.clear();
  history.push("/")
}



 render(){
 var name= localStorage.getItem("name");
 var photo= localStorage.getItem("photo");
 var Uid= localStorage.getItem("uid");

return(

<div className="all">
{
// console.log("runi")
}


<div className="area" >

<div className="pici">
  
<div className="mainLogout">
<div className="logout" onClick={()=>this.logout(this.props.history)}>

</div>
<p>Logout</p>
</div>
  
    <h1 className="merge">Prox-chat</h1>
   
   <div className="manage">
   <img className="curimg" src={photo}></img>
    <div>
    {name}
    </div>
</div>

</div> 

<div className="AllUSer">
  {/* {console.log("allMap",this.props.all)} */}


 {this.props.all.map((v,i)=>{
  
if(v.uid!==Uid){
  return(


    <div id={i}>
    <img   className="img-in" src={v.photo}></img>
     <h2  className="nameofimg">{v.name}</h2>
     <hr></hr><hr></hr>
     <button className="suk" onClick={()=>this.chatUser(v,this.props.history)}>
      Open chat
    </button>

    </div>
    
    
    )
}


})} 


</div>
Working on something for latest feature so maybe you face some ui error,s


</div>
<div className="circles">
            <li></li>  <li></li>  <li></li>  <li></li>  <li></li>  <li></li>  <li></li>  <li></li>  <li></li>
                    
                 
    
            </div>
</div>
  )
}



}
const mapStateToProps = (state) => {
  return {
    curUser:state.currentUser
    ,  all:state.allUSers
    
  }
}
function mapDispatchToProp(dispatch) {
  return ({
   
         
nulli:()=>{
  dispatch(nulli())
} ,
dataRecieve:()=>{
  dispatch(dataRecieve())
}
     
  })
}
export default connect(mapStateToProps,mapDispatchToProp)(chat);