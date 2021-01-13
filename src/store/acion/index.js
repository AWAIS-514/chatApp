import firebase from "../../cofig/firebase";


 
const facebook=(data)=>{
 
  return (dispatch)=>
    {  

      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
      
        var user = result.user;
       
       
      
         var userData={
name:user.displayName,

photo:user.photoURL
,
email:user.email,
phone:user.phoneNumber,
uid:user.uid
         }
         localStorage.clear()
         localStorage.setItem("name",userData.name)
         localStorage.setItem("photo",userData.photo)
         localStorage.setItem("uid",userData.uid)
         firebase.database().ref(`chat-app/users/ ${userData.uid}`).set(userData)

       
        data.push('/chat')
        dispatch({ type:'app_data',payload:userData})

      }).catch(function(error) {
        // Handle Errors here.
      
        var errorMessage = error.message;
        // The email of the user's account used.
      
        console.log("error ==>",errorMessage );
        // ...
      });

    
   }
  }




  const google=(data)=>{
 
    return (dispatch)=>
      {  
  
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
         
         
        
           var userData={
  name:user.displayName,
  
  photo:user.photoURL
  ,
  email:user.email,
  phone:user.phoneNumber,
  uid:user.uid
           }
           localStorage.clear()
           localStorage.setItem("name",userData.name)
           localStorage.setItem("photo",userData.photo)
           localStorage.setItem("uid",userData.uid)
           firebase.database().ref(`chat-app/users/ ${userData.uid}`).set(userData)
  
         
          data.push('/chat')
          dispatch({ type:'app_data',payload:userData})
  
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
  
      
     }
    }


      
const dataRecieve=(data)=>{


return(dispatch)=>{
firebase.database().ref('chat-app/users/').on("child_added",(v)=>{
  // console.log("data agea====>",v.val());

  dispatch({ type:'all-users',payload:v.val()})
  
})
}
}
   




const nulli=()=>{
  return(dispatch)=>{
  
    
      dispatch({ type:'null'})
      
    
    }

 
  }
  const setKey=()=>{
    return(dispatch)=>{
    
      let key;
      let user=localStorage.getItem("uid")
      
      let client=localStorage.getItem("currrentUid")
      if(user<client){
      
      key=user+client;
      
      console.log("inner",key);
      }
      else
      { key=client+user;
        console.log("outer",key);
      }
      
      localStorage.setItem("setKey",key)
    }
    
    
  } 
  
  
  




export {
  dataRecieve,
    facebook,
    google,nulli,
    setKey
}