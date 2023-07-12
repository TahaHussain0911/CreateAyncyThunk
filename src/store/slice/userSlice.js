import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const createUser = createAsyncThunk(
  "create",
  async (data, { rejectWithValue }) => {
    const apiUrl = "https://64ae99b1c85640541d4d5c7e.mockapi.io/Crud";
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      const data = response?.json();
      return data;
    } catch (error) {
      return rejectWithValue("Error occured");
    }
  }
);

export const showUser = createAsyncThunk(
  "show",
  async (data, { rejectWithValue }) => {
    const apiUrl = "https://64ae99b1c85640541d4d5c7e.mockapi.io/Crud";
    const response = await fetch(apiUrl);
    try {
      const data = response.json();
      return data;
    } catch (error) {
      return rejectWithValue("Error occured");
    }
  }
);

export const note = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    loader: false,
    error: false,
  },
  extraReducers: {
    [createUser.pending]: (state) => {
      state.loader = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.notes.push(action.payload);
      state.loader = false;
    },

    [createUser.rejected]: (state, action) => {
      state.loader = false;
      state.error = true;
    },
    [showUser.pending]: (state) => {
      state.loader = true;
    },
    [showUser.fulfilled]: (state, action) => {
      state.notes=action.payload;
      state.loader = false;
    },

    [showUser.rejected]: (state, action) => {
      state.loader = false;
      state.error = true;
    },
  },
  reducers: {},
});
export default note.reducer;
