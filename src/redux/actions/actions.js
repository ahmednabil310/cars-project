import * as types from './types';
import axiosDocs from '../../api/server';
import toastr from 'toastr';

// action of makeList
export function makeList(Year) {
  return (dispatch) => {
    axiosDocs
      .get(`api/Car/GetCarMake?Year=${Year}`)
      .then(function (response) {
        dispatch({
          type: types.GETMAKELIST,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log('makeList: ', error);
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
        console.log('makeYears: ', error);
      });
  };
}

// action of login success
export function clearAllCar() {
  return (dispatch) => {
    dispatch({
      type: types.CLEARALLCAR,
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
        console.log('makeYears: ', error);
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
        console.log('getCars: ', error);
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
        console.log('getSubCars: ', error);
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
        console.log('getEngine: ', error);
      });
  };
}

export function getCarData(id, index) {
  return (dispatch) => {
    axiosDocs
      .get(`api/Car/GetCarData?Id=${id}`)
      .then(function (response) {
        dispatch({
          type: types.GETCARDATA,
          data: response.data.result,
          index: index - 1,
        });
      })
      .catch(function (error) {
        console.log('getCarData: ', error);
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
        console.log('getCommentList: ', error);
      });
  };
}

export function getMultipleComparison(car1, car2, car3, car4) {
  return (dispatch) => {
    axiosDocs
      .get(
        `api/Car/GetMultipleComparison?car1=${car1}&car2=${car2}&car3=${car3}&car4=${car4}`,
      )
      .then(function (response) {
        dispatch({
          type: types.GETCARCOMPARISON,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log('getMultipleComparison: ', error);
      });
  };
}

export function addComment(param) {
  return (dispatch) => {
    axiosDocs
      .post(`api/Comment/Add`, param)
      .then(function () {
        toastr.success('Add Comment Success');
        axiosDocs
          .get(`api/Comment/GetCommentList?CarId=${param.carId}`)
          .then(function (response) {
            dispatch({
              type: types.GETCOMMENTLIST,
              data: response.data.result,
            });
          })
          .catch(function (error) {
            console.log('getCommentListfromAdd: ', error);
          });
      })
      .catch(function (error) {
        console.log('addComment: ', error);
      });
  };
}

export function addUsers(param) {
  return (dispatch) => {
    axiosDocs
      .post(`api/User/Add`, param)
      .then(function (response) {
        toastr.success('Add User Success');
        localStorage.setItem(
          'userId',
          response.data.result.replaceAll(/['"]+/g, ''),
        );
        window.location.reload();
      })
      .catch(function (error) {
        console.log('addUsers: ', error);
      });
  };
}

export function updateComment(param) {
  return (dispatch) => {
    axiosDocs
      .post(`api/Comment/Update`, param)
      .then(function (response) {
        toastr.success('Update Comment Success');
        dispatch({
          type: types.UPDATECOMMENT,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log('addComment: ', error);
      });
  };
}

export function likeComment(param, successFunc) {
  return (dispatch) => {
    axiosDocs
      .post(`api/Comment/Likes`, param)
      .then(function (response) {
        successFunc(param.id);
        toastr.success('Like Comment Success');
        // dispatch({
        //   type: types.UPDATECOMMENT,
        //   data: response.data.result,
        // });
      })
      .catch(function (error) {
        console.log('likeComment: ', error);
      });
  };
}

export function deleteComment(param) {
  return (dispatch) => {
    axiosDocs
      .post(`api/Comment/Delete`, param)
      .then(function (response) {
        toastr.success('Delete Comment Success');
        dispatch({
          type: types.DELETECOMMENT,
          data: param.id,
        });
      })
      .catch(function (error) {
        dispatch({
          type: types.DELETECOMMENT,
          data: param.id,
        });
        toastr.success('Delete Comment Success');
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
        console.log('getTopReview: ', error);
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
        console.log('getTopParticipants: ', error);
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
        console.log('getMostLike: ', error);
      });
  };
}

export function getCarByPriceRange() {
  return (dispatch) => {
    axiosDocs
      .get(`api/Car/GetCarByPriceRange`)
      .then(function (response) {
        dispatch({
          type: types.GETCARPRICE,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log('getMostLike: ', error);
      });
  };
}

export function getCarByCategory() {
  return (dispatch) => {
    axiosDocs
      .get(`api/Car/GetTopRatedCars`)
      .then(function (response) {
        dispatch({
          type: types.GETCARCATEGORY,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log('getMostLike: ', error);
      });
  };
}

export function getCarsByCategory(category) {
  return (dispatch) => {
    axiosDocs
      .get(`api/Car/GetCarByCategory?category=${category}`)
      .then(function (response) {
        dispatch({
          type: types.GETCARSCATEGORY,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log('getMostLike: ', error);
      });
  };
}

export function getMostLikes() {
  return (dispatch) => {
    axiosDocs
      .get(`api/Comment/GetMostLiked`)
      .then(function (response) {
        dispatch({
          type: types.GETMOSTLIKES,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log('getMostLike: ', error);
      });
  };
}
export function getLatestReview() {
  return (dispatch) => {
    axiosDocs
      .get(`api/Comment/GetLatestReview`)
      .then(function (response) {
        dispatch({
          type: types.GETCARREVIEW,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log('getMostLike: ', error);
      });
  };
}

export function getCarsRate() {
  return (dispatch) => {
    axiosDocs
      .get(`api/Car/GetTopRatedCars`)
      .then(function (response) {
        dispatch({
          type: types.GETCARRATED,
          data: response.data.result,
        });
      })
      .catch(function (error) {
        console.log('getMostLike: ', error);
      });
  };
}

export function clearCar(index) {
  return (dispatch) => {
    dispatch({
      type: types.DELETECAR,
      data: index,
    });
  };
}
