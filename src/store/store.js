import { configureStore } from "@reduxjs/toolkit";
import { UI_slice, flagSlice } from "./reducers_slice";

const store = configureStore({
  reducer: {
    UI: UI_slice.reducer,
    flag: flagSlice.reducer,
  },
});

export default store;
