import React from "react";
import useGlobalHook from "../utils/useGlobalHook";
import * as actions from "../actions";

const initialState = {
  test: "",
  user: 1
};

const useGlobal = useGlobalHook(React, initialState, actions);
export default useGlobal;