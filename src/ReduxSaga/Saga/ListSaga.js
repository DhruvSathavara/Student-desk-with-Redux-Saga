import { call, put, takeLatest } from "redux-saga/effects";
import * as type from '../types';

const url = `http://studentdesk.in/api/v1/newarrivals?&apiname=newArrivals`;

function getAPI() {
    return fetch(url).then(response => response.json());
}


// Worker Function - 
function * fetchBooksData (){
    try{
        const response = yield call(getAPI);
        yield put ({type:type.FETCH_BOOKS_SUCCESS, payload:response});
    }catch(e){
        yield put ({type:type.FETCH_BOOKS_FAILURE, message:e.message})
    }
}


// Watcher Function - It watches for an action to dispatch from any component // 
function * bookListSaga (){
    yield takeLatest(type.FETCH_BOOKS_REQUEST,fetchBooksData);
}

export default bookListSaga;