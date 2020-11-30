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

export function getCommentList(id) {
  return (dispatch) => {
    axiosDocs
      .get(`api/Comment/GetCommentList?CarId=${id}`)
      .then(function (response) {
        dispatch({
          type: types.GETCOMMENTLIST,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log("getCommentList: ", error);
      });
  };
}

export function getMultipleComparison(car1, car2, car3, car4) {
  return (dispatch) => {
    axiosDocs
      .get(
        `api/Car/GetMultipleComparison?car1=${car1}&car2=${car2}&car3=${car3}&car4=${car4}`
      )
      .then(function (response) {
        dispatch({
          type: types.GETCARCOMPARISON,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log("getMultipleComparison: ", error);
      });
  };
}

export function addComment(param) {
  return (dispatch) => {
    axiosDocs
      .post(`api/Comment/Add`, param)
      .then(function () {
        toastr.success("Add Comment Success");
        axiosDocs
          .get(`api/Comment/GetCommentList?CarId=${param.carId}`)
          .then(function (response) {
            dispatch({
              type: types.GETCOMMENTLIST,
              data: response.data.result,
            });
          })
          .catch(function (error) {
            console.log("getCommentListfromAdd: ", error);
          });
      })
      .catch(function (error) {
        console.log("addComment: ", error);
      });
  };
}

export function getTopReview() {
  return (dispatch) => {
    axiosDocs
      .get(`api/Comment/GetTopReview`)
      .then(function (response) {
        dispatch({
          type: types.GETTOPREVIEW,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log("getTopReview: ", error);
      });
  };
}

export function getTopParticipants() {
  return (dispatch) => {
    axiosDocs
      .get(`api/Comment/GetTopParticipants`)
      .then(function (response) {
        dispatch({
          type: types.GETTOPPARTICIPANTS,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log("getTopParticipants: ", error);
      });
  };
}

export function getMostLike() {
  return (dispatch) => {
    axiosDocs
      .get(`api/Comment/GetMostLiked`)
      .then(function (response) {
        dispatch({
          type: types.GETMOSTLIKE,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log("getMostLike: ", error);
      });
  };
}