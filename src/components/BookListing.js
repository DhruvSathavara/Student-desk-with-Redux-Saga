import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../ReduxSaga/Actions/Actions";
import { useEffect } from "react";
import BooksAll from "./Books";


function BookListing() {
    const dispatch = useDispatch()
    const books = useSelector((state) => state.AllBooks.BooksData);
    console.log('bookss----->', books)
    const loading = useSelector((state) => state.loading);
    const error = useSelector((state) => state.error);
   
    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    return (
        <div className="container">
                <h1>Related search result:</h1>
            {books.length === 0 && !loading && <p>Loading...</p>}
            {error && !loading && <p>{error}</p>}
            {books.data &&
                books.data.map((book) => <BooksAll key={book.id} book={book} />)}
        </div>
    );
}

export default BookListing;