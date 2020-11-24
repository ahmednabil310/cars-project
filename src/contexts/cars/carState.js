import React, { useReducer, createContext } from 'react';
import carReducer from './carReducer';
import server from '../../api/server';

//initial State
const initialState = {
  Cars: [],
  Maker:[],
  Year : [],
  Engine : [],
  CarData:null,
  HighRated : [],
  RangedCars : [],
  CatagriodCars :[],
  ComparedCar :[],
  CurrentEngine : null,
  CurrentName :null
};

// create context
export const carContext = createContext(initialState);

//Create Provider
export const CarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carReducer, initialState);

  // actions

// GetCarMake
const GetCarMake=async(year)=>{
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
        const res = await server.get(`/api/Car/GetCarMake?Year=${year}`,config)
        if (res.request.readyState === 4 && res.request.status === 200) {    
        dispatch({
            type : 'GETCARMAKE',
            payload : res.data
        })
    }
    } catch (err) {
      console.log(err);
    }
  };

// GetCarSubModel
const GetCarSubModel=async(make,year)=>{
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
        const res = await server.get(`/api/Car/GetCarSubModel?Make=${make}&Year=${year}`,config)
        dispatch({
            type : 'GETCARSUBMODEL',
            payload : res.data
        })
    } catch (err) {
      console.log(err);
    }
}
//GetYear
const GetYear=async()=>{

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
        const res = await server.get(`/api/Car/GetYear`,config)
        if (res.request.readyState === 4 && res.request.status === 200) {
            dispatch({
                type : 'GETCARYEAR',
                payload : res.data
            })
        }

    } catch (err) {
      console.log(err);
    }
  };

//GetCarEngine
const GetCarEngine=async(submodel,year)=>{
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
        const res = await server.get(`/api/Car/GetCarEngine?SubModel=${submodel}&Year=${year}`,config)
        dispatch({
            type : 'GETCARENGINE',
            payload : res.data
        })
    } catch (err) {
      console.log(err);
    }
}
// GetCarData
const GetCarData=async(id)=>{
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
        const res = await server.get(`/api/Car/GetCarData?Id=${id}`,config)
        if (res.request.readyState === 4 && res.request.status === 200) {    
        dispatch({
            type : 'GETCARDATA',
            payload : res.data
        })
    }
    } catch (err) {
      console.log(err);
    }
}
// get top rated cars
const GetTopRatedCars=async()=>{
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
        const res = await server.get('/api/Car/GetTopRatedCars',config)
        if (res.request.readyState === 4 && res.request.status === 200) {    
        dispatch({
            type :"GETTOPRATED",
            payload : res.data
        })
    }  
    } catch (err) {
      console.log(err);
    }
  };

  // get car by price range
  const GetCarByPriceRange = async () => {
    try {
      const res = await server.get('/api/Car/GetCarByPriceRange');
      dispatch({
        type: 'GETRANGEDCAR',
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

// get car by catagry
const GetCarByCategory =async(catagry)=>{
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
        const res = await server.get(`/api/Car/GetCarByCategory?category=${catagry}`,config)
        if (res.request.readyState === 4 && res.request.status === 200) {   
        dispatch({
            type : 'GETCARBTCATAGRY',
            payload : res.data
        })
        }  
    } catch (err) {
      console.log(err);
    }
  };
  // cars comparsion
  const CarComparsion = async (car1, car2, car3, car4) => {
    try {
      const res = await server.get(
        `/api/Car/car1=${car1}&car2=${car2}&car3=${car3}&car4=${car4}`,
      );
      dispatch({
        type: 'CARCAMPARSION',
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
}
//set currentName name
 
const setCurrentName=(name)=>{
    dispatch({
        type: "SET_Name_Current",
        payload :name
    }) 
}

// current engine
const setcurrentEngine=(engine)=>{
    dispatch({
        type: "SET_CURRENT",
        payload :engine
    }) 
}

  return (
    <carContext.Provider
      value={{
          Cars : state.Cars,
          Maker : state.Maker,
          Year : state.Year,
          Engine :state.Engine,
          CarData : state.CarData,
          HighRated:state.HighRated,
          RangedCars : state.RangedCars, 
          CatagriodCars : state.CatagriodCars,
          ComparedCar : state.ComparedCar,
          CurrentEngine: state.CurrentEngine,
          CurrentName : state.CurrentName, 
          GetCarMake,
          GetCarSubModel,
          GetYear,
          GetCarEngine,
          GetCarData,
          GetTopRatedCars,
          GetCarByPriceRange,
          GetCarByCategory,
          CarComparsion,
          setCurrentName,
          setcurrentEngine
      }}
    >
      {children}
    </carContext.Provider>
  );
};
