import React, { useReducer, createContext } from "react";
import carReducer from "./carReducer";
import server from '../../api/server'

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
  ComparedCar :[] 
};

// create context
export const carContext = createContext(initialState);

//Create Provider
export const CarProvider = ({ children }) => {
    const [state, dispatch] = useReducer(carReducer, initialState);

// actions

// GetCarMake
const GetCarMake=async(year)=>{
    try {
        const res = await server.get(`/api/Car/GetCarMake?Year=${year}`)
        dispatch({
            type : 'GETCARMAKE',
            payload : res.data
        })
    } catch (err) {
     console.log(err);   
    }
}

// GetCarSubModel
const GetCarSubModel=async(make,year)=>{
    try {
        const res = await server.get(`/api/Car/GetCarSubModel?Make=${make}&Year=${year}`)
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

   /* const basicAuth ='Basic'+{   
        username :'smartarzcompareapi',
        password :'GYPKZNY1rG23YM9HT3rg2pL6MJo81iwF'
      }*/
        

  const config = {
        headers :{
            "Access-Control-Allow-Origin" : "*"
        },
        Authorization :`Basic`[{   
            username :'smartarzcompareapi',
            password :'GYPKZNY1rG23YM9HT3rg2pL6MJo81iwF'
          }]
    } 
    try {
        const res = await server.get(`/api/Car/GetYear`,config)
        dispatch({
            type : 'GETCARYEAR',
            payload : res.data
        })
    } catch (err) {
     console.log(err);   
    }
}

//GetCarEngine
const GetCarEngine=async(submodel,year)=>{
    try {
        const res = await server.get(`/api/Car/GetCarEngine?SubModel=${submodel}&Year=${year}`)
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
    try {
        const res = await server.get(`/api/Car/GetCarData?Id=${id}`)
        dispatch({
            type : 'GETCARDATA',
            payload : res.data
        })
    } catch (err) {
     console.log(err);   
    }
}
// get top rated cars
const GetTopRatedCars=async()=>{
    try {
        const res = await server.get('/api/Car/GetTopRatedCars')
        dispatch({
            type :"GETTOPRATED",
            payload : res.data
        })
    } catch (err) {
        console.log(err);
    }
}

// get car by price range 
const GetCarByPriceRange =async()=>{
    try {
        const res = await server.get('/api/Car/GetCarByPriceRange')
        dispatch({
            type :"GETRANGEDCAR",
            payload:res.data
        })
    } catch (err) {
        console.log(err);
    }
}  

// get car by catagry
const GetCarByCategory =async(catagry)=>{
    try {
        const res = await server.get(`/api/Car/GetCarByCategory?category=${catagry}`)
        dispatch({
            type : 'GETCARBTCATAGRY',
            payload : res.data
        })
    } catch (err) {
        console.log(err);
    }
}
// cars comparsion
const CarComparsion =async(car1,car2,car3,car4)=>{
    try {
        const res = await server.get(`/api/Car/car1=${car1}&car2=${car2}&car3=${car3}&car4=${car4}`)
        dispatch({
            type : 'CARCAMPARSION',
            payload : res.data
        })
    } catch (err) {
        console.log(err);
    }
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
          GetCarMake,
          GetCarSubModel,
          GetYear,
          GetCarEngine,
          GetCarData,
          GetTopRatedCars,
          GetCarByPriceRange,
          GetCarByCategory,
          CarComparsion
      }}
    >
      {children}
    </carContext.Provider>
  );
}
