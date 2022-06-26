import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  count: 0,
};

const SpinnerSlice = createSlice({
  name: "SpinnerSlice",
  initialState,
  reducers: {
    setLoadingStart: (state) => {
      state.loading = true;
      state.count += 1;
    },
    setLoadingEnd: (state) => {
      state.count -= 1;
      if (state.count == 0) {
        state.loading = false;
      }
    },
  },
});

export const { setLoadingStart, setLoadingEnd } = SpinnerSlice.actions;

export default SpinnerSlice.reducer;
