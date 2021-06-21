import fakeJobs from "../../fakeData/fakedata.json";

const initialState = {
  tempJobs: [],
  allJobs: [],
  jobDetails: fakeJobs[0],
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_ALL_JOBS": {
      const newState = {
        ...state,
        allJobs: action.payload,
        tempJobs: action.payload,
      };

      return newState;
    }

    case "SEARCH_JOBS": {
      const newState = {
        ...state,
        allJobs: action.payload,
        tempJobs: action.payload,
      };

      return newState;
    }

    //
    case "FILTER_JOBS": {
      if (!action.payload.jobType) {
        const newState = {
          ...state,
          allJobs: state.tempJobs,
        };
        return newState;
      }

      if (action.payload.jobType && action.payload.jobType !== "all-jobs") {
        const newState = {
          ...state,
          allJobs: state.tempJobs.filter(
            (j) => j.jobType === action.payload.jobType
          ),
        };
        return newState;
      } else return state;
    }

    //
    case "DISPLAY_ALL_JOBS": {
      const newState = {
        ...state,
        allJobs: state.tempJobs,
      };
      return newState;
    }

    case "JOB_DETAILS": {
      const newState = {
        ...state,
        jobDetails: state.allJobs.find((j) => j._id === action.payload),
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default jobsReducer;
