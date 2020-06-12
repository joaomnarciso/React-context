export default (state, { type, payload }) => {
  switch (type) {
    case "USER_LOGGED_IN":
      return {
        ...state,
        isAuth: true
      };

    case "USER_LOGGED_OUT":
      return {
        ...state,
        isAuth: false
      };

    default:
      return state;
  }
};
