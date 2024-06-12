import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: ["", "", "", "", "", "", "", "", ""],
  count: 0,
  showModal: false,
  lock: false,
  playerWin: "",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGame: (state, action) => {
      state.data = action.payload.data;
      state.count = action.payload.count;
      state.lock = action.payload.lock;
      state.playerWin = action.payload.playerWin;
    },
    resetGame: (state) => {
      state.data = ["", "", "", "", "", "", "", "", ""];
      state.count = 0;
      state.lock = false;
      state.showModal = false;
      state.playerWin = "";
    },
    setLock: (state) => {
      state.lock = true;
    },
    setModal: (state) => {
      state.showModal = true;
    },
    resetModal: (state) => {
      state.showModal = false;
    },
  },
});

export const { setGame, resetGame, setLock, setModal, resetModal } =
  gameSlice.actions;
export default gameSlice.reducer;
