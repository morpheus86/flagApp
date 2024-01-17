import { createSlice } from "@reduxjs/toolkit";

const UI_initialState = {
  isFlagLoading: false,
  showNotification: null,
};

const flagInitialState = {
  flags: [],
};

export const UI_slice = createSlice({
  name: "UI",
  initialState: UI_initialState,
  reducers: {
    fireNotification(state, action) {
      state.isFlagLoading = true;
      state.showNotification = {
        message: action.payload.message,
        status: action.payload.status,
        title: action.payload.title,
      };
    },
    resetNotification(state, action) {
      state.isFlagLoading = false;
      state.showNotification = null;
    },
  },
});

export const UI_actions = UI_slice.actions;

export const flagSlice = createSlice({
  name: "fag",
  initialState: flagInitialState,
  reducers: {
    getFlags(state, action) {
      state.flags = action.payload.flags;
    },
  },
});

export const flagActions = flagSlice.actions;

export const getAllFlags = () => async (dispatch) => {
  dispatch(
    UI_actions.fireNotification({
      message: "Loading...",
      status: "Loading",
      title: "Loading",
    })
  );
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (response.ok) {
      dispatch(
        UI_actions.fireNotification({
          message: "Flags retrieve successfully",
          status: "Success",
          title: "Success",
        })
      );
    }
    const allFlags = await response.json();
    dispatch(
      flagActions.getFlags({
        flags: allFlags,
      })
    );
  } catch (error) {
    dispatch(
      UI_actions.fireNotification({
        message: `Problem with retrieving flags, Error ${error}`,
        status: "Error",
        title: "Error",
      })
    );
  }
  dispatch(UI_actions.resetNotification());
};
