import React, { useReducer, createContext } from "react";
import commentReducer from "./commentReducer";
import server from '../../api/server'

//initial State
const initialState = {
   commentsList :[],
   mostLiked :[]
};

// create context
export const commentContext = createContext(initialState);

//Create Provider
export const CarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(commentReducer, initialState);

// actions

// get comments
 const GetCommentList=async(carId)=>{
   try {
       const res = await server.get(`/api/Comment/GetCommentList?CarId=${carId}`)
       dispatch({
        type :"COMMENTS_LIST",
        payload:res.data  
      } )
   } catch (err) {
       console.log(err);
   }
 }

 //get most liked
 const GetMostLiked=async()=>{
    try {
       const res =await server.get(`/api/Comment/GetMostLiked`)
       dispatch({
        type : 'MOST_LIKED',
        payload : res.data
       })  
    } catch (err) {
        console.log(err);
    }
 }

 // get top participations
const GetTopParticipants=async()=> {
    
}
 return(
     <commentContext.Provider value=
     {{
        commentsList : state.commentsList,
        mostLiked : state.mostLiked,
        GetCommentList,
        GetMostLiked
        
     }}>
         {children}
     </commentContext.Provider>
 )
}
  

