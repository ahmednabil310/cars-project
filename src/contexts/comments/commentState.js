import React, { useReducer, createContext } from "react";
import commentReducer from "./commentReducer";
import server from '../../api/server'

//initial State
const initialState = {
   commentsList :[],
   mostLiked :[],
   topParticipants :[],
   Reviews:[]
};

// create context
export const commentContext = createContext(initialState);

//Create Provider
export const CommentProvider = ({ children }) => {
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
    try {
        const res =await server.get(`/api/Comment/GetTopParticipants`)
        dispatch({
         type : 'TOP_PARTICIPANTS',
         payload : res.data
        })     
     } catch (err) {
        console.log(err);
    }
}
// get top reviews
const GetTopRiviews=async()=>{
    const config = {
        headers :{
            "Access-Control-Allow-Origin" : "*"
        },
        auth :{   
            username :'smartarzcompareapi',
            password :'GYPKZNY1rG23YM9HT3rg2pL6MJo81iwF'
          }
    } 
    try {
        const res =await server.get(`/api/Comment/GetTopReview`,config)
        dispatch({
         type : 'TOP_REVIEWS',
         payload : res.data
        })     
     } catch (err) {
        console.log(err);
    }
} 
// add comment
const AddComment=async(comment)=>{
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
    try {
        const res = await server.post(`/api/Comment/Add`,comment,config)
        dispatch(
            {
              type :"ADD_COMMENT",
              payload : res.data
            }
        )
    } catch (err) {
        console.log(err);
    }
}



 return(
     <commentContext.Provider value=
     {{
        commentsList : state.commentsList,
        mostLiked : state.mostLiked,
        topParticipants :state.topParticipants,
        Reviews:state.Reviews,
        GetCommentList,
        GetMostLiked,
        GetTopParticipants,
        GetTopRiviews,
        AddComment
     }}>
         {children}
     </commentContext.Provider>
 )
}
  

