import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getMovies = createAsyncThunk(
  'movielist',
  async (args, thunkAPI) => {
    try {
      const response = await axios.get(`https://reactnative.dev/movies.json`);
      return response.data.movies;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
  {
    condition: (args, {getState, extra}) => {
      const {thunkdata} = getState();
      if (thunkdata.movies.length > 0) {
        return false;
      }
    },
  },
);

const initialState = {
  loading: false,
  error: '',
  movies: [],
  favMovies: [],
};

const ThunkSlice = createSlice({
  name: 'thunkdata',
  initialState,
  reducers: {
    addOrRemoveFavMovies(state, action) {
      let movie = state.movies.find(obj => obj.id == action.payload);
      let index = state.favMovies.findIndex(obj => obj.id == movie.id);
      console.log(index);
      if (index != -1) {
        state.favMovies.splice(index, 1);
      } else {
        state.favMovies.push(movie);
      }
      if (movie) {
        movie.favourite = !movie.favourite;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase('movielist/pending', (state, action) => {
        state.loading = true;
      })
      .addCase('movielist/fulfilled', (state, action) => {
        state.movies = action.payload;
        state.loading = false;
      })
      .addCase('movielist/rejected', (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addDefaultCase((state, action) => {});
  },
});

export const {addOrRemoveFavMovies} = ThunkSlice.actions;
export default ThunkSlice.reducer;
