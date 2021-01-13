import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import firebase from '../../../../cofig/firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons(props) {
  
 
 
  const classes = useStyles();
let [images,update]=useState([]);
let [url,updateUrl]=useState([]);



const resolveAfter2Seconds=(e)=>{
  
 
  let myPromise = new Promise(function(myResolve, myReject) {
    for (let i = 0; i < e.target.files.length; i++) {
     
      images.push(e.target.files[i])
      
    }
   
   
   images.map((v,i)=>{
    var ref=firebase.storage().ref(`/`).child(`images/${v.name}`).put(v)
    ref.on('state_changed', function(snapshot){
     // Observe state change events such as progress, pause, and resume
     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
     var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
     localStorage.setItem('progress',progress)
     console.log('Upload is ' + progress + '% done');
     switch (snapshot.state) {
       case firebase.storage.TaskState.PAUSED: // or 'paused'
         console.log('Upload is paused');
         break;
       case firebase.storage.TaskState.RUNNING: // or 'running'
         console.log('Upload is running');
         break;
     }
   }, function(error) {
     // Handle unsuccessful uploads
   }, function() {
      ref.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      let fileDetails={
        CurrentUser:localStorage.getItem('CurrentUser'),
      messege:`${downloadURL}`,
      uid:localStorage.getItem("uid")
   ,
   type:"data"
      }
firebase.database().ref(`chat-app/`).child(`chats/${localStorage.getItem("setKey")}`).push(fileDetails)
    
    });
  });
  
  
})
myResolve();

myPromise
.then(
()=> {
  


} 
)

     
    });   
         
         
    
    }




 async function getValue(e){

  let tag=document.getElementById('progressDiv').style.display="block";
  
    await resolveAfter2Seconds(e);

 props.getpro(url)
 

}



  return (
    <div className={classes.root}>
    <input
      accept="image/*"
      className={classes.input}
      id="contained-button-file"
      multiple
      type="file"
      onChange={getValue}
    />
    {/* <label htmlFor="contained-button-file">
      <Button variant="contained" color="primary" component="span">
        Upload
      </Button>
    </label> */}
    <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
    <label htmlFor="contained-button-file">
      <IconButton  variant="contained" aria-label="upload picture" component="span">
        <PhotoCamera />
      </IconButton>
    </label>
  </div>
  );
}
