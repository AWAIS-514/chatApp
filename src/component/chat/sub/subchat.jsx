
import React, { Component } from "react";
import  "./app.css"
import {connect} from "react-redux";
import {setKey} from "../../../store/acion/index";
import firebase from "../../../cofig/firebase";
import UploadButtons from "./subchatComp/image"
 class sub extends Component{
 
  componentDidMount() {


this.props.setKey();
firebase.database().ref(`chat-app/`).child(`chats/${localStorage.getItem("setKey")}`).on("child_added",(m)=>{
//  console.log(m.val().messege)
 this.state.chat.push(m.val())

this.setState({
  chat:this.state.chat
})


}) 
 }

constructor(props){
  super(props)
  this.state={
   chat:[],
messege:" ",
chatS:[],
Url:{},
progress:" "




  }
}
// local function,s are all in local sub chat
// only set key fuction which make key is in the action file
add=(e)=>{
  
  this.state.messege=e.target.value;
  console.log("runnn");
  // console.log(this.state.messege);
  this.setState({
    
    messege:this.state.messege
  })
  }




send=()=>{
   



this.setState({
    
  messege:" ",
 
})

this.state.chatS={
  messege:this.state.messege,
  currentUser:localStorage.getItem("name"),
  type:"text",
  uid:localStorage.getItem('uid')

}
   firebase.database().ref(`chat-app/`).child(`chats/${localStorage.getItem("setKey")}`).push(this.state.chatS)


  

}
getpro=(props)=>{
  


// firebase.database().ref(`chat-app/`).child(`chats/${localStorage.getItem("setKey")}`).push()

let v
setInterval(() => {
  v=Math.round(localStorage.getItem('progress'))
  console.log("v>>",v);
this.setState({

  
  progress:v
})

}, 1000);

}










render(){
// console.log("djfsdjaf",this.state.chat);



  return(
    <div className="overall_subchat">
     <div  className="pici">
    
    <h1 className="merge">Prox-chat</h1>
   
   <div className="manage">
   <img className="curimg" src={localStorage.getItem("currentImage")} ></img>
  <h6>{localStorage.getItem("CurrentUser")}</h6>
    <div>
   
    </div>
</div>
</div> 
     <div className="fixed">Prox chat provide's you a secure method to share you Chat's with your relatives, friend,s also other people,s which are login in prox chat Brought you by HMC(Hassan) </div>


    <div>
    
 <div  id="progressDiv"  >
Your Upload Progress:{this.state.progress}%
</div> 







      <div className="chat">
{/* {console.log(this.state.chat)} */}






      {this.state.chat.map((v,i)=>{


    return(
  
  
    

     ( v.uid===localStorage.getItem("uid") && v.type=="text")? 
   
        <div id={i} className="mapDiv">
      
      <div  className="font" style={{backgroundColor:"burlywood",padding:"10px" }}>
      <p>{v.messege}</p>
      </div>
      </div>  
      :
     (v.type==="data" && v.uid===localStorage.getItem("uid"))?
     <div id={i} className="mapDiv">
  
     <div  className="font" style={{backgroundColor:"#5435",padding:"10px", width:"250px" }}>
   {v.type}: Upload Successfully
     </div>
     </div>
    : (v.type==="data")?
    <div id={i} className="mapDiv">
 
    <div  className="font" style={{backgroundColor:"#5435", width:"230px" }}>

     

  <a href={v.messege} className='recievedata' download={v.messege}>

    <p className='recievedata'>Recieve:Click to download</p>
  </a>

    </div>
    </div>
       :
     <div id={i} className="UserDiv">
        <div className="font1" style={{backgroundColor:"rgba(255, 127, 80, 0.746)" ,padding:"10px"}}>
     <p>{v.messege}</p>
     </div>


     
          </div>
         
         

        
  
    )
  
  })} 

      </div>


    
   <div className="color">
     
   <input type="text" value={this.state.messege} className="inputSend" placeholder="Enter your messege" onChange={this.add} />

    <button className="inputButton" onClick={this.send}></button>
 <div className="ImageButton">
    <UploadButtons  getpro={this.getpro} />
 
 </div>
  
   </div>
    </div>
    <div className="empty">

    </div>
    
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
   
    setKey:()=>{
      dispatch(setKey())
    }
     
  })
}


export default connect(mapStateToProps,mapDispatchToProp)(sub);