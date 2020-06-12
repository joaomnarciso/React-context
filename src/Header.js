import React, { useContext } from "react";
import Context from "./context";

export default () => {
  const { state, dispatch } = useContext(Context);

  const login = () => {
    dispatch({ type: "USER_LOGGED_IN" });
  };
  const logout = () => {
    dispatch({ type: "USER_LOGGED_OUT" });
  };

  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <span class="navbar-brand">Navbar</span>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav ml-auto">
          {!state.isAuth ? (
            <>
              <li class="nav-item active">
                <button class="btn btn-outline-light" onClick={login}>
                  Login
                </button>
              </li>
              <li class="nav-item">
                <button class="btn btn-light ml-3">Register</button>
              </li>
            </>
          ) : (
            <li class="nav-item">
              <button class="btn btn-danger ml-3" onClick={logout}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};
