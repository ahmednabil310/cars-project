import initialState from './initialState';

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GETMAKELIST':
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
    case 'GETYEARSLIST':
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

    case 'GETMAKEYEARS':
      return {
        ...state,
        listMakeYears: action.data,
      };

    case 'GETCARS':
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

    case 'GETSUBCARS':
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

    case 'GETENGINE':
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

    case 'GETCARDATA':
      const listCar = [...state.listCarData, action.data];

      return {
        ...state,
        listCarData: listCar,
        objCarData: action.data,
      };

    case 'GETCOMMENTLIST':
      return {
        ...state,
        listComment: action.data,
      };

    case 'GETCARCOMPARISON':
      if (state.listCarData.length > 0) {
        state.listCarData = [];
      }

      let listCars = [];

      listCars.push(action.data['car1']);
      listCars.push(action.data['car2']);
      listCars.push(action.data['car3']);
      listCars.push(action.data['car4']);

      localStorage.setItem('CarData', JSON.stringify(listCars));

      return {
        ...state,
        listCarData: listCars,
      };

    case 'GETTOPREVIEW':
      return {
        ...state,
        listReviews: action.data,
      };

    case 'GETTOPPARTICIPANTS':
      return {
        ...state,
        ListParticipants: action.data,
      };

    case 'GETMOSTLIKE':
      return {
        ...state,
        ListMostLike: action.data,
      };
    case 'GETCARPRICE':

      let bindData = [];

      let bindblow60 = [];
      let blow60 = action.data.filter((x) => x.scoreRange === 'below 60');

      blow60.forEach(item => {
        bindblow60.push({
          id: item.id,
          make: item.make,
          model: item.model
        });
      });

      bindData.push({
        image_1: blow60[0].image_1,
        scoreRange: blow60[0].scoreRange,
        class: blow60[0].class,
        listCars: bindblow60
      });

      let bindblow80 = [];
      let blow80 = action.data.filter((x) => x.scoreRange === '60-80');

      blow80.forEach(item => {
        bindblow80.push({
          id: item.id,
          make: item.make,
          model: item.model
        });
      });

      bindData.push({
        image_1: blow80[0].image_1,
        scoreRange: blow80[0].scoreRange,
        class: blow80[0].class,
        listCars: bindblow80
      });


      let bindblow100 = [];
      let blow100 = action.data.filter((x) => x.scoreRange === '80-100');

      blow100.forEach(item => {
        bindblow100.push({
          id: item.id,
          make: item.make,
          model: item.model
        });
      });

      bindData.push({
        image_1: blow100[0].image_1,
        scoreRange: blow100[0].scoreRange,
        class: blow100[0].class,
        listCars: bindblow100
      });


      let bindblow130 = [];
      let blow130 = action.data.filter((x) => x.scoreRange === '100-130');

      blow130.forEach(item => {
        bindblow130.push({
          id: item.id,
          make: item.make,
          model: item.model
        });
      });

      bindData.push({
        image_1: blow130[0].image_1,
        scoreRange: blow130[0].scoreRange,
        class: blow130[0].class,
        listCars: bindblow130
      });

      let bindblow200 = [];
      const blow200 = action.data.filter((x) => x.scoreRange === '130-200');

      blow200.forEach(item => {
        bindblow200.push({
          id: item.id,
          make: item.make,
          model: item.model
        });
      });

      bindData.push({
        image_1: blow200[0].image_1,
        scoreRange: blow200[0].scoreRange,
        class: blow200[0].class,
        listCars: bindblow200
      });

      let bindblow300 = [];
      let blow300 = action.data.filter((x) => x.scoreRange === '200-300');

      blow300.forEach(item => {
        bindblow300.push({
          id: item.id,
          make: item.make,
          model: item.model
        });
      });

      bindData.push({
        image_1: blow300[0].image_1,
        scoreRange: blow300[0].scoreRange,
        class: blow300[0].class,
        listCars: bindblow300
      });


      let bindblow500 = [];
      let blow500 = action.data.filter((x) => x.scoreRange === '300-500');
      blow500.forEach(item => {
        bindblow500.push({
          id: item.id,
          make: item.make,
          model: item.model
        });
      });

      bindData.push({
        image_1: blow500[0].image_1,
        scoreRange: blow500[0].scoreRange,
        class: blow500[0].class,
        listCars: bindblow500
      });

      let bindabove500 = [];
      const above500 = action.data.filter((x) => x.scoreRange === 'above 500');
      above500.forEach(item => {
        bindabove500.push({
          id: item.id,
          make: item.make,
          model: item.model
        });
      });

      bindData.push({
        image_1: above500[0].image_1,
        scoreRange: above500[0].scoreRange,
        class: above500[0].class,
        listCars: bindabove500
      });

      return {
        ...state,
        ListCarPrice: bindData,
      };
    case 'GETCARCATEGORY':
      return {
        ...state,
        ListCarCategory: action.data,
      };

    case 'GETCARSCATEGORY':
      return {
        ...state,
        listMakeYears: action.data,
      };

    case 'GETMOSTLIKES':
      return {
        ...state,
        ListLike: action.data,
      };
    case 'DELETECOMMENT':
      let listComm = state.listComment.filter((x) => x.id !== action.data);

      return {
        ...state,
        listComment: listComm,
      };
    case 'DELETECAR':
      state.listCarData.splice(action.data, 1);
      return {
        ...state,
        listCarData: [...state.listCarData],
      };
    case 'GETCARREVIEW':
      return {
        ...state,
        ListCarLike: action.data,
      };
    case 'GETCARRATED':
      return {
        ...state,
        ListCarsRate: action.data,
      };
    case 'CLEARALLCAR':
      return {
        ...state,
        listCarData: [],
      };
    default:
      return {
        ...state,
      };
  }
}
