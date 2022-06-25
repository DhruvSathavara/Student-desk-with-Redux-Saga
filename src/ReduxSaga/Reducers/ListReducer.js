import * as type from '../types';

const initialState = {
    BooksData: [],
    loading: false,
    error: null
}
// console.log(initialState.BooksData,'reducerrrr')
function AllBooks(state = initialState, action) {
    switch (action.type) {
        case type.FETCH_BOOKS_REQUEST:
            return {
                ...state,
                loading: true,
                BooksData: []

            }
        case type.FETCH_BOOKS_SUCCESS:
            return{
                ...state,
                loading:false,
                BooksData :action.payload
            }
        case type.FETCH_BOOKS_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.message,
                BooksData:[]
            }
        default:
            return state            
    }
}

export default AllBooks;