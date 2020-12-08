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

      if (state.listCarData.length > 0) {
        state.listCarData = [];
      }

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

      const blow60 = action.data.find(x => x.scoreRange === "below 60");
      const blow80 = action.data.find(x => x.scoreRange === "60-80");
      const blow100 = action.data.find(x => x.scoreRange === "80-100");
      const blow130 = action.data.find(x => x.scoreRange === "100-130");
      const blow200 = action.data.find(x => x.scoreRange === "130-200");
      const blow300 = action.data.find(x => x.scoreRange === "200-300");
      const blow500 = action.data.find(x => x.scoreRange === "300-500");
      const above500 = action.data.find(x => x.scoreRange === "above 500");

      const listData = [blow60, blow80, blow100, blow130, blow200, blow300, blow500, above500];

      return {
        ...state,
        ListCarPrice: listData,
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

      state.listCarData.splice(action.data, 1);
      return {
        ...state,
        listCarData: [...state.listCarData]
      };
    case "GETCARREVIEW":

      return {
        ...state,
        ListCarLike: action.data,
      };
    case "GETCARRATED":

      return {
        ...state,
        ListCarsRate: action.data.sort((a, b) => b - a).slice(0, 5)
      };
    default:
      return {
        ...state,
      };
  }
}
