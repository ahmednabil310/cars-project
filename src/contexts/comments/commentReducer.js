/* eslint-disable import/no-anonymous-default-export */
export default (state, action) => {
    switch (action.type) {
        case "TOP_REVIEWS" : 
         return {
             ...state, Reviews : action.payload
         }
        default :
           return state  
}}
