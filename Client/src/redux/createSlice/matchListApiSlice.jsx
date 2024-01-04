import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMatchList } from "../../utils/apiService";
import axiosHttpHandler from "../../services/AxiosHttpHandler";

let initialData = {
  matchList: [],
  status: "",
  error: null,
};

export const getMatchListData = createAsyncThunk("getMatchList", async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const res = await axiosHttpHandler.get(getMatchList);
    return res.data;
  } catch (err) {
    throw err;
  }
});

const matchListSlice =  createSlice({
  name: "matchListAPI",
  initialState: initialData,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMatchListData.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(getMatchListData.fulfilled, (state, action) => {
        state.status = "Completed";
        state.matchList = action.payload;
      })
      .addCase(getMatchListData.rejected, (state, action) => {
        state.status = "Error";
        state.matchList = [];
        state.error = action.error.message;
      });
  },
});

// export const {matchList, status, error} = matchListSlice.actions;
export default matchListSlice.reducer;