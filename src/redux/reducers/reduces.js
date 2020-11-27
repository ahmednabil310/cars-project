import initialState from "./initialState";

export default function (state = initialState, action) {
  switch (action.type) {
    case "GETMAKELIST":
      let make = [];
      action.data.forEach((item) => {
        let objDept = {
          value: item.make,
          label: item.make,
        };

        make.push(objDept);
      });

      return {
        ...state,
        listMake: make,
      };
    case "GETYEARSLIST":
      let years = [];
      action.data.forEach((item) => {
        let objDept = {
          value: item.year,
          label: item.year,
        };

        years.push(objDept);
      });

      return {
        ...state,
        listYears: years,
      };

    case "GETMAKEYEARS":
      return {
        ...state,
        listMakeYears: action.data,
      };

    case "GETCARS":
      let cars = [];
      action.data.forEach((item) => {
        let objDept = {
          value: item.make,
          label: item.make,
        };

        cars.push(objDept);
      });

      return {
        ...state,
        listCars: cars,
      };

    case "GETSUBCARS":
      let subcars = [];
      action.data.forEach((item) => {
        let objDept = {
          value: item.model,
          label: item.model,
        };

        subcars.push(objDept);
      });

      return {
        ...state,
        listSubCars: subcars,
      };

    case "GETENGINE":
      let Engine = [];
      action.data.forEach((item) => {
        let objDept = {
          value: item.id,
          label: item.engine,
        };

        Engine.push(objDept);
      });

      return {
        ...state, 
        listEngine: Engine,
      };

    case "GETCARDATA":
      const listCar = [...state.listCarData, action.data];
      localStorage.setItem("CarData",JSON.stringify(listCar));
      return {
        ...state, 
        listCarData: listCar,
      };
    default:
      return {
        ...state,
      };
  }
}
