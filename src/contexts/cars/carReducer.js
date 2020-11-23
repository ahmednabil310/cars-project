/* eslint-disable no-duplicate-case */
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch (action.type) {
        case "GETCARMAKE":
            return {
                ...state , Maker :action.payload
            };
            case "GETCARSUBMODEL":
                 return {
                     ...state ,Cars :action.payload
                 };
         case "GETCARYEAR":
                return {
                    ...state , Year : action.payload
                };
                case "GETCARENGINE":
                    return {
                        ...state,
                        Engine : action.payload
                    };
                    case "GETCARDATA":
                        return {
                              ...state,
                              CarData:action.payload
                        };
                        case "GETTOPRATED":
                          return{
                                ...state,
                                HighRated : action.payload  
                            };
                            case "GETRANGEDCAR":
                                return {
                                    ...state,
                                    RangedCars : action.payload
                                };
                            case "GETCARBTCATAGRY":
                                return {
                                    ...state,
                                    CatagriodCars : action.payload  
                                }   
                                case "CARCAMPARSION":
                                    return {
                                        ...state,
                                        ComparedCar : action.payload
                                    } 
                                 case "SET_CURRENT":
                                     return {
                                         ...state,
                                         CurrentEngine :action.payload
                                     }  
                                     case "SET_Name_Current":
                                         return {
                                             ...state,
                                             CurrentName : action.payload
                                         }         
                          default:
                                 return state; 
    }
};