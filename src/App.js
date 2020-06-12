import React, { useContext, useReducer } from "react";
import Context from "./context";
import reducer from "./reducer";
import "./styles.css";
import Header from "./Header";
import Hello from "./Hello";

export default function App() {
  const initialState = useContext(Context);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        <Hello />
      </div>
    </Context.Provider>
  );
}
