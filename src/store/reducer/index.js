

const INITIAL_STATE = {
   allUSers:[],
   currentUser:{}

}


export default (state = INITIAL_STATE, action) => {
  
   if(action.type==='null') 
   {
     return({

  allUSers:[]

      })

     
   }



  if(action.type==='app_data') 
   {
     return({

   ...state, currentUser:action.payload

      })

     
   }
   
 
 
     
     
  if(action.type==='all-users') 
  {
    return({

  
  allUSers:[...state.allUSers,action.payload]

     })

    
  }
   
  
   return state; 
   
  }