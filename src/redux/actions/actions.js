import * as types from "./types";
import axiosDocs from "../../api/server";
import toastr from "toastr";

// action of makeList
export function makeList() {
  return (dispatch) => {
    axiosDocs
      .get(`api/Car/GetCarMake?Year=2020`)
      .then(function (response) {
        dispatch({
          type: types.GETMAKELIST,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log("makeList: ", error);
      });
  };
}

// action of login success
export function makeYears() {
  return (dispatch) => {
    axiosDocs
      .get(`api/Car/GetYear`)
      .then(function (response) {
        dispatch({
          type: types.GETYEARSLIST,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log("makeYears: ", error);
      });
  };
}

export function getMakeByYears(make, year) {
  return (dispatch) => {
    axiosDocs
      .get(`api/Car/GetCarSubModel?Make=${make}&Year=${year}`)
      .then(function (response) {
        dispatch({
          type: types.GETMAKEYEARS,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log("makeYears: ", error);
      });
  };
}

export function getCars(year) {
  return (dispatch) => {
    axiosDocs
      .get(`api/Car/GetCarMake?Year=${year}`)
      .then(function (response) {
        dispatch({
          type: types.GETCARS,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log("getCars: ", error);
      });
  };
}

export function getSubCars(model, year) {
  return (dispatch) => {
    axiosDocs
      .get(`api/Car/GetCarSubModel?Make=${model}&Year=${year}`)
      .then(function (response) {
        dispatch({
          type: types.GETSUBCARS,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log("getSubCars: ", error);
      });
  };
}

export function getEngine(submodel, year) {
  return (dispatch) => {
    axiosDocs
      .get(`api/Car/GetCarEngine?SubModel=${submodel}&Year=${year}`)
      .then(function (response) {
        dispatch({
          type: types.GETENGINE,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log("getEngine: ", error);
      });
  };
}

export function getCarData(id) {
  return (dispatch) => {
    axiosDocs
      .get(`api/Car/GetCarData?Id=${id}`)
      .then(function (response) {
        dispatch({
          type: types.GETCARDATA,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log("getCarData: ", error);
      });
  };
}
