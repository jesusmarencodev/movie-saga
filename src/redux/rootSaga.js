
import { all } from "redux-saga/effects";
import { moviesSagas } from "./sagas/movieSagas";


export default function* rootSaga() {
  yield all([...moviesSagas]);
}
