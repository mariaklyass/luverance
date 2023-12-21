import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchSanityData } from "../../client";
import { tourItemCollectionQuery } from "../utils/queries";

const initialState = {
  items: [],
  isLoading: false,
};

export const getTourItems = createAsyncThunk(
  "tourItems/getTourItems",
  async (_, thunkAPI) => {
    try {
      const data = await fetchSanityData(tourItemCollectionQuery);
      console.log("data", data);
      // const { items } = data.tourItemCollection?.items || [];
      // return items;
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const tourItemsSlice = createSlice({
  name: "tourItems",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getTourItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTourItems.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getTourItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export default tourItemsSlice.reducer;
