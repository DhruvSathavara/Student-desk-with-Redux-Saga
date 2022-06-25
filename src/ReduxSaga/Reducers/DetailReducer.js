import * as type from '../types';

const initialState = {
    BooksDetailData: {},
    id:'',
    loading : false,
    error : null,
}

console.log(initialState.BooksDetailData,'satateee');

export default function DetailBook(state=initialState,action){
 
    switch(action.type)
    {
        case type.FETCH_BOOK_DETAIL_REQUEST:
            
            return{
                ...state,
                loading:true,
                BooksDetailData: {},
                id:action.payload
                
            }
        case type.FETCH_BOOK_DETAIL_SUCCESS:
            return{
                ...state,
                loading:false,
                BooksDetailData: action.payload,

            }    
        case type.FETCH_BOOK_DETAIL_FAILURE:
            return{
                ...state,
                loading:false,
                BooksDetailData:{}
            } 
        default:
            return state
    }
}