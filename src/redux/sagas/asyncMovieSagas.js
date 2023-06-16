import { call, put } from "redux-saga/effects";
import { fetchMovies, fetchOneMovie } from "../../api/api";
import { setMovies, setOneMovie } from "../feature/movieReducer";

//get all movies by name
export function* onLoadMoviesAsync({ payload }) {
    try {
      const movieName = payload;
      const response = yield call(fetchMovies, movieName);
      if (response.status === 200) {
        yield put(setMovies({ ...response.data }));
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  //get one movie by id
  export function* onLoadOneMovieAsync({ payload }) {
    try {
      const movieId = payload;
      const response = yield call(fetchOneMovie, movieId);
      if (response.status === 200) {
        yield put(setOneMovie({ ...response.data }));
      }
    } catch (error) {
      console.log(error);
    }
  }