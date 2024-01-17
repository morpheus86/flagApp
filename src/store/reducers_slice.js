import { createSlice } from "@reduxjs/toolkit";

const UI_initialState = {
  isLoading: false,
};

export const UI_slice = createSlice({
  name: "UI",
  initialState: UI_initialState,
  reducers: {},
});

export const UI_actions = UI_slice.actions;
