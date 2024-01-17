import { configureStore } from "@reduxjs/toolkit";
import { UI_slice } from "./reducers_slice";

const store = configureStore({
  reducer: {
    UI: UI_slice.reducer,
  },
});

export default store;
