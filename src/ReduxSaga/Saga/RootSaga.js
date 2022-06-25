import { all } from "redux-saga/effects";

import bookListSaga from "./ListSaga";
import bookDetailSaga from "./DetailBookSaga";

export default function * RootSaga(){
    yield all([
        bookListSaga(),
        bookDetailSaga(),
    ])
}