import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { profileAPI } from "../services/profileService";

// ambil profile by id
export const fetchProfileById = createAsyncThunk(
  "profile/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      return await profileAPI.getById(id);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// update profile
export const updateProfile = createAsyncThunk(
  "profile/update",
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      return await profileAPI.update(id, payload);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// DELETE profile
export const deleteProfile = createAsyncThunk(
  "profile/delete",
  async (id, { rejectWithValue }) => {
    try {
      await profileAPI.remove(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    currentProfile: null,
    loading: false,
    error: null,
  },

  reducers: {
    updateLocalProfile(state, action) {
      state.currentProfile = action.payload;
    },
    clearProfile(state) {
      state.currentProfile = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // FETCH
      .addCase(fetchProfileById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfileById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentProfile = action.payload;
      })
      .addCase(fetchProfileById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // UPDATE
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.currentProfile = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // DELETE
      .addCase(deleteProfile.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProfile.fulfilled, (state) => {
        state.loading = false;
        state.currentProfile = null;
      })
      .addCase(deleteProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { updateLocalProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
