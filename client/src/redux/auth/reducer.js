import * as Constants from './constants';

const initialState = {
  isAuthenticated: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Constants.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true
      }

    case Constants.LOGIN_FAILURE:
      console.log(action.error);
      return {
        ...state,
        error: action.error.response.data.message
      }

    default:
      return state;
  }
}
