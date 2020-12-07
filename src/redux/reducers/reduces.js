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
      localStorage.setItem("CarData", JSON.stringify(listCar));
      return {
        ...state,
        listCarData: listCar,
        objCarData: action.data
      };

    case "GETCOMMENTLIST":
      return {
        ...state,
        listComment: action.data,
      };

    case "GETCARCOMPARISON":
      let listCars = [];

      listCars.push(action.data["car1"]);
      listCars.push(action.data["car2"]);
      listCars.push(action.data["car3"]);
      listCars.push(action.data["car4"]);

      localStorage.setItem("CarData", JSON.stringify(listCars));

      return {
        ...state,
        listCarData: listCars,
      };

    case "GETTOPREVIEW":
      return {
        ...state,
        listReviews: action.data,
      };

    case "GETTOPPARTICIPANTS":
      return {
        ...state,
        ListParticipants: action.data,
      };

    case "GETMOSTLIKE":
      return {
        ...state,
        ListMostLike: action.data,
      };
    case "GETCARPRICE":
      return {
        ...state,
        ListCarPrice: action.data,
      };
    case "GETCARCATEGORY":
      return {
        ...state,
        ListCarCategory: action.data,
      };

    case "GETMOSTLIKES":
      return {
        ...state,
        ListLike: action.data,
      };
    case "DELETECOMMENT":

      let listComm = state.listComment.filter(x => x.id !== action.data);

      return {
        ...state,
        listComment: listComm,
      };
    case "DELETECAR":

      let listCarData = state.listCarData.splice(action.data,1);
 
      return {
        ...state,
        listCarData: state.listCarData,
      };
    case "GETCARREVIEW":
 
      return {
        ...state,
        ListCarLike: action.data,
      };
    case "GETCARRATED":
 
      return {
        ...state,
        ListCarsRate: action.data.sort((a,b) => b-a).slice(0,5)
      };
    default:
      return {
        ...state,
      };
  }
}
