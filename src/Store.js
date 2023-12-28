import { configureStore } from "@reduxjs/toolkit";
import  dataReducer  from "./Lekeres";

export default configureStore({
  reducer: {
    countries: dataReducer,
  },
});
