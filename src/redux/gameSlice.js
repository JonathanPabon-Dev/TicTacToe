import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: ["", "", "", "", "", "", "", "", ""],
  count: 0,
  showModal: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGame: (state, action) => {
      state.data = action.payload.data;
      state.count = action.payload.count;
    },
    resetGame: (state) => {
      state.data = ["", "", "", "", "", "", "", "", ""];
      state.count = 0;
    },
  },
});

export const { setGame, resetGame } = gameSlice.actions;
export default gameSlice.reducer;
