import React, { useReducer, createContext } from 'react';
import carReducer from './carReducer';
import server from '../../api/server';

//initial State
const initialState = {
  Cars: [],
<<<<<<< HEAD
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
=======
  Maker: [],
  Year: [],
  Engine: [],
  CarData: null,
  HighRated: [],
  RangedCars: [],
  CatagriodCars: [],
  ComparedCar: [],
>>>>>>> 82497f130d62b1eb26bc74c0e068f437706e5ac6
};

// create context
export const carContext = createContext(initialState);

//Create Provider
export const CarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carReducer, initialState);

  // actions

<<<<<<< HEAD
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
                console.log(res);
        dispatch({
            type : 'GETCARMAKE',
            payload : res.data
        })
    }
=======
  // GetCarMake
  const GetCarMake = async (year) => {
    try {
      const res = await server.get(`/api/Car/GetCarMake?Year=${year}`);
      dispatch({
        type: 'GETCARMAKE',
        payload: res.data,
      });
>>>>>>> 82497f130d62b1eb26bc74c0e068f437706e5ac6
    } catch (err) {
      console.log(err);
    }
  };

<<<<<<< HEAD
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
=======
  // GetCarSubModel
  const GetCarSubModel = async (make, year) => {
    try {
      const res = await server.get(
        `/api/Car/GetCarSubModel?Make=${make}&Year=${year}`,
      );
      dispatch({
        type: 'GETCARSUBMODEL',
        payload: res.data,
      });
>>>>>>> 82497f130d62b1eb26bc74c0e068f437706e5ac6
    } catch (err) {
      console.log(err);
    }
<<<<<<< HEAD
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

=======
  };
  //GetYear
  const GetYear = async () => {
    /* const basicAuth ='Basic'+{   
        username :'smartarzcompareapi',
        password :'GYPKZNY1rG23YM9HT3rg2pL6MJo81iwF'
      }*/

    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      Authorization: `Basic`[
        {
          username: 'smartarzcompareapi',
          password: 'GYPKZNY1rG23YM9HT3rg2pL6MJo81iwF',
        }
      ],
    };
    try {
      const res = await server.get(`/api/Car/GetYear`, config);
      dispatch({
        type: 'GETCARYEAR',
        payload: res.data,
      });
>>>>>>> 82497f130d62b1eb26bc74c0e068f437706e5ac6
    } catch (err) {
      console.log(err);
    }
  };

<<<<<<< HEAD
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
=======
  //GetCarEngine
  const GetCarEngine = async (submodel, year) => {
    try {
      const res = await server.get(
        `/api/Car/GetCarEngine?SubModel=${submodel}&Year=${year}`,
      );
      dispatch({
        type: 'GETCARENGINE',
        payload: res.data,
      });
>>>>>>> 82497f130d62b1eb26bc74c0e068f437706e5ac6
    } catch (err) {
      console.log(err);
    }
<<<<<<< HEAD
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
        console.log(res);
        if (res.request.readyState === 4 && res.request.status === 200) {    
        dispatch({
            type : 'GETCARDATA',
            payload : res.data
        })
    }
=======
  };
  // GetCarData
  const GetCarData = async (id) => {
    try {
      const res = await server.get(`/api/Car/GetCarData?Id=${id}`);
      dispatch({
        type: 'GETCARDATA',
        payload: res.data,
      });
>>>>>>> 82497f130d62b1eb26bc74c0e068f437706e5ac6
    } catch (err) {
      console.log(err);
    }
<<<<<<< HEAD
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
        console.log(res,"jj");
        if (res.request.readyState === 4 && res.request.status === 200) {    
        dispatch({
            type :"GETTOPRATED",
            payload : res.data
        })
    }  
=======
  };
  // get top rated cars
  const GetTopRatedCars = async () => {
    try {
      const res = await server.get('/api/Car/GetTopRatedCars');
      dispatch({
        type: 'GETTOPRATED',
        payload: res.data,
      });
>>>>>>> 82497f130d62b1eb26bc74c0e068f437706e5ac6
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

<<<<<<< HEAD
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
        console.log(res,"jjll");
        if (res.request.readyState === 4 && res.request.status === 200) {   
        dispatch({
            type : 'GETCARBTCATAGRY',
            payload : res.data
        })
        }  
=======
  // get car by catagry
  const GetCarByCategory = async (catagry) => {
    try {
      const res = await server.get(
        `/api/Car/GetCarByCategory?category=${catagry}`,
      );
      dispatch({
        type: 'GETCARBTCATAGRY',
        payload: res.data,
      });
>>>>>>> 82497f130d62b1eb26bc74c0e068f437706e5ac6
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
<<<<<<< HEAD
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
=======
  };
>>>>>>> 82497f130d62b1eb26bc74c0e068f437706e5ac6

  return (
    <carContext.Provider
      value={{
<<<<<<< HEAD
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
=======
        Cars: state.Cars,
        Maker: state.Maker,
        Year: state.Year,
        Engine: state.Engine,
        CarData: state.CarData,
        HighRated: state.HighRated,
        RangedCars: state.RangedCars,
        CatagriodCars: state.CatagriodCars,
        ComparedCar: state.ComparedCar,
        GetCarMake,
        GetCarSubModel,
        GetYear,
        GetCarEngine,
        GetCarData,
        GetTopRatedCars,
        GetCarByPriceRange,
        GetCarByCategory,
        CarComparsion,
      }}>
>>>>>>> 82497f130d62b1eb26bc74c0e068f437706e5ac6
      {children}
    </carContext.Provider>
  );
};
