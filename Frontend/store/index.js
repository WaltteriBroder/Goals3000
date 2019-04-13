import React from "react";
import useGlobalHook from "../utils/useGlobalHook";
import * as actions from "../actions";

const initialState = {
  test: "juukeli",
  user: 1, // kovakoodataan useriksi id ykkönen
  goals: [],
  newGoalModalOpen: false
};

const useGlobal = useGlobalHook(React, initialState, actions);
export default useGlobal;