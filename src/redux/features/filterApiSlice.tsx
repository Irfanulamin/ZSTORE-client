import { createSlice } from "@reduxjs/toolkit";

type TFilterState = {
  amountValue: number[] | [];
  ratingValue?: number | undefined;
  categoryValue?: string | undefined;
};

const initialState: TFilterState = {
  amountValue: [],
  ratingValue: undefined,
  categoryValue: undefined,
};

const filterApiSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterApi: (state, action) => {
      const { ratingValue, amountValue, categoryValue } = action.payload;
      state.categoryValue = categoryValue;
      console.log(state.categoryValue);
      state.amountValue = amountValue;
      console.log(state.amountValue);
      state.ratingValue = ratingValue;
      console.log(state.ratingValue);
    },
    setDefaultApi: (state) => {
      state.categoryValue = undefined;
      state.ratingValue = undefined;
      state.amountValue = [];
    },
  },
});

export const { setFilterApi, setDefaultApi } = filterApiSlice.actions;

export default filterApiSlice.reducer;

export const useCurrentAmountValue = (state: any) => state.filter.amountValue;
export const useCurrentRatingValue = (state: any) => state.filter.ratingValue;
export const useCurrentCategoryValue = (state: any) =>
  state.filter.categoryValue;
