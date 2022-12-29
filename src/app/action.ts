import uuid from "react-uuid";
import type { PayloadAction } from "@reduxjs/toolkit";
interface PayloadType {
  type: string;
  payload: string;
}
interface ArrayValue {
  id: string;
  text: string;
}
export const addTodoFn = (state: any, action: PayloadAction<PayloadType>) => {
  const todo = {
    id: uuid(),

    text: action.payload,
  };

  state.push(todo);
};
export const removeItem = (state: any, action: any) => {
  const valueToremove = action.payload;
  const newArr = state.filter((value: ArrayValue) => {
    return value.text !== valueToremove;
  });
  return newArr;
};
