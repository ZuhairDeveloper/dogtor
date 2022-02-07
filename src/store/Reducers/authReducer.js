import { LOGIN_SUCCESS, LOGOUT_REQUEST } from "../Actions/actionType";

const INITIAL_STATE = {
  access_token: "",
  isLogin: false,
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload?.data.user,
        isLogin: true,
        access_token: action.payload?.token,
      };
      break;

    case LOGOUT_REQUEST:
      return {
        ...state,
        access_token: "",
        isLogin: false,
        user: null,
      };
    default:
      return state;
  }
};
