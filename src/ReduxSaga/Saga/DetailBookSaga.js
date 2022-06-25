import { call, put, takeLatest } from "redux-saga/effects";
import * as type from '../types';


async function getApi(id) {


   const response = await fetch(`http://studentdesk.in/api/v1/book-details/${id}`);
   return await response.json();
}


// Worker Function //
function* fetchBookDetailsData(action) {
   console.log(action.payload, "id");
   try {
      const response = yield call(getApi, action.payload);
      console.log(response, "details");
      yield put({ type: type.FETCH_BOOK_DETAIL_SUCCESS, payload: response });
   } catch (e) {
      console.log(e);
      yield put({ type: type.FETCH_BOOK_DETAIL_FAILURE, message: e.message });
   }
}


// Watcher Function - It watches for an action to dispatch from any component // 
function* bookDetailSaga() {
   yield takeLatest(type.FETCH_BOOK_DETAIL_REQUEST, fetchBookDetailsData)
}

export default bookDetailSaga;