import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const dataLekeres = createAsyncThunk("country", async () => {
  const data = await fetch('https://backend.ichat.hu/api/countries');
  return data.json();
});

const dataReducer = createSlice({
  name: "countries",
  initialState: {
    status: null,
    list: [],
  },

  extraReducers: (build) => {
    build
      .addCase(dataLekeres.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(dataLekeres.fulfilled, (state, action) => {
        state.status = 'ready'
        state.list = action.payload
      })
    }
});



export default dataReducer.reducer
