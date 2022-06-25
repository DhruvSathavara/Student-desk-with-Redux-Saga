import * as type from '../types';

export function fetchBooks (){
    return{
        type:type.FETCH_BOOKS_REQUEST,
    }
}

export function fetchBookDetail (id){
    console.log(id,'reducer idd')
    return{
        type:type.FETCH_BOOK_DETAIL_REQUEST,
        payload:  id
    }
}