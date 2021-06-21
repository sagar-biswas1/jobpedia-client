const initialState = {
  userInfo: {},
};

const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN_INFO": {
      const newState = { userInfo: action.payload };
      return newState;
    }

    case "USER_LOGOUT": {
      const newState = { userInfo: {} };
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default loginReducers;
