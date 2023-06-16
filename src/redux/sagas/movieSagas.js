import { fork, takeLatest } from "redux-saga/effects";
import { getMovies, getOneMovie } from "../feature/movieReducer";
import { onLoadMoviesAsync, onLoadOneMovieAsync } from "./asyncMovieSagas";



function* onLoadMovies() {
  yield takeLatest(getMovies.type, onLoadMoviesAsync);
}


function* onLoadOneMovie() {
  yield takeLatest(getOneMovie.type, onLoadOneMovieAsync);
}




export const moviesSagas = [fork(onLoadMovies), fork(onLoadOneMovie)];
