// src/store/movieSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { filmAPI } from "../services/api";

// async thunk
export const fetchMovies = createAsyncThunk(
  "movies/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const [hero, vertikal, top, movies, newReleases, trendingMovies] =
        await Promise.all([
          filmAPI.getHeroData(),
          filmAPI.getVertikalMovies(),
          filmAPI.getTopMovies(),
          filmAPI.getMovies(),
          filmAPI.getNewReleases(),
          filmAPI.getTrendingMovies(),
        ]);

      return {
        hero,
        vertikal,
        top,
        movies,
        newReleases,
        trendingMovies,
      };
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    dataHero: [],
    imgVertikal: [],
    topMovies: [],
    dataMovies: [],
    newMovies: [],
    trendingMovies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.dataHero = action.payload.hero;
        state.imgVertikal = action.payload.vertikal;
        state.topMovies = action.payload.top;
        state.dataMovies = action.payload.movies;
        state.newMovies = action.payload.newReleases;
        state.trendingMovies = action.payload.trendingMovies;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default movieSlice.reducer;
