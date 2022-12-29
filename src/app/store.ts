import { configureStore } from "@reduxjs/toolkit";
import todoNitish from "../features/todoSlice";
export default configureStore({
  reducer: { todok: todoNitish },
});
