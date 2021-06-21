import axios from "axios";

export const loadJobs = () => {
  return (dispatch) => {
    axios
      .get("https://afternoon-shelf-00792.herokuapp.com/all-jobs-approved/")
      .then(function (response) {
        dispatch({
          type: "LOAD_ALL_JOBS",
          payload: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const searchJobs = (payload) => {
  return (dispatch) => {
    axios
      .get(`https://afternoon-shelf-00792.herokuapp.com/search-jobs/${payload}`)
      .then(function (response) {
        dispatch({
          type: "SEARCH_JOBS",
          payload: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const showAllTypes = (payload) => {
  return { type: "DISPLAY_ALL_JOBS", payload };
};

//

export const filterJobs = (payload) => {
  return { type: "FILTER_JOBS", payload };
};
//

export const jobDetails = (payload) => {
  return { type: "JOB_DETAILS", payload };
};
