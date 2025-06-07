import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type TSkip = {
  id: number;
  size: number;
  price: number;
  totalPrice: string;
  hirePeriod: number;
  allowsHeavyWaste: boolean;
  allowedOnRoad: boolean;
};

const initialState: TSkip = {
  id: 0,
  size: 0,
  price: 0,
  totalPrice: "0.00",
  hirePeriod: 0,
  allowsHeavyWaste: false,
  allowedOnRoad: false
};

export const skipSlice = createSlice({
  name: "skips",
  initialState,
  reducers: {
    setSkip: (state, action: PayloadAction<TSkip>) => {
      return { ...state, ...action.payload };
    },
    resetSkip: () => initialState,
  },
});

export const { setSkip, resetSkip } = skipSlice.actions;
export default skipSlice.reducer;