import { createSlice } from "@reduxjs/toolkit";
import data from "../bestjokes.json"; // src folder er JSON import

const Searchfeatureslice = createSlice({
  name: "Search",
  initialState: {
    alldata: data, // ✅ JSON direct assign
    searchinitial: "",
  },
  reducers: {
    setterofalldata: (state, action) => {
      state.alldata = action.payload;
    },
    setterofsearch: (state, action) => {
      state.searchinitial = action.payload;
    },
  },
});

export const { setterofalldata, setterofsearch } = Searchfeatureslice.actions;
export default Searchfeatureslice.reducer;
