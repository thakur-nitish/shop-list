import { createSlice } from "@reduxjs/toolkit";
import { AppContextInterface } from "../components/AddShop";
import { useSelector } from "react-redux";

// import { addTodoFn, removeItem } from "../app/action";
export interface CounterState {
  value: number;
  incrementAmount: number;
}
interface PayloadTypeAdd {
  type: string;
  payload: AppContextInterface;
  shopName?: string;
}
interface PayloadTypeRemov {
  type: string;
  payload: string;
}
const initialState: AppContextInterface[] = [
  {
    shopName: "SayaMedico",
    area: "Thane",
    category: "Chemist",
    oDate: "2022-12-09",
    cDate: "2022-12-23",
    uuid: "456",
  },
];
export const counterSlice = createSlice({
  name: "todok",
  initialState,
  reducers: {
    addShop: (state, action: PayloadTypeAdd) => {
      return [...state, action.payload];
      // state.value += state.incrementAmount;
    },
    removeShop: (state, action: PayloadTypeRemov) => {
      const valueToremove = action.payload;
      const newArr = state.filter((value) => {
        return value.shopName !== valueToremove;
      });
      return newArr;
    },
    editShop: (state, action: PayloadTypeAdd) => {
      const valueToEdit = action.payload;
      state.map((value) => {
        if (value.shopName === valueToEdit.toEditShopName) {
          value.shopName = valueToEdit.shopName;
          value.area = valueToEdit.area;
          value.category = valueToEdit.category;
          value.oDate = valueToEdit.oDate;
          value.cDate = valueToEdit.cDate;
        }
      });
    },
  },
});

export const { addShop, removeShop, editShop } = counterSlice.actions;

// this is for configureStore
export default counterSlice.reducer;
