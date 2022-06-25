import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {fetchBookDetail} from '../ReduxSaga/Actions/Actions.js'

function BookDetail() {

    const { id } = useParams()
    console.log(id)
    const dispatch = useDispatch();

    const BookDetail = useSelector((state) => state.DetailBook.BooksDetailData);
    const loading = useSelector((state) => state.loading)

    useEffect(() => {
        dispatch(fetchBookDetail(id))
    }, [dispatch, id])

    return (
        <div>
            {loading && <p>loading...</p>}
            {BookDetail.length === 0 && !loading ? (<p>Data is not available..</p>) : (
                <>
                    {
                        BookDetail.data && BookDetail.data.map((book) => {
                            return (
                                <div className="book-box row">
                                    <div className="col-4 book-image-box">
                                        <img src={book.photo}></img>
                                    </div>
                                    <div className="col-8 text-details">
                                        <div className="row">
                                            <h3>{book.name}</h3>
                                        </div>
                                        {/* <div className="title-under-line col-7"></div> */}
                                        <div className="row ">
                                            <div className="col-6  sell-condition">
                                                <ul>
                                                    <li className="onSale">On sell</li>
                                                    <li className="condition">Condition: Used</li>
                                                </ul>
                                            </div>
                                            <div className="col-6 book-price">
                                                <p>Price: <i class="fa-solid fa-indian-rupee-sign"></i> {book.price}</p>
                                            </div>
                                        </div>
                                        {/* <div className="title-under-line col-7"></div> */}
                                        <div className="row post-detail">
                                            <div className="col-6 posted-on">
                                                <div className="date-bx">
                                                    <span>Posted on:</span>
                                                    <h4>1, Dec</h4>
                                                </div>
                                                <div className="posted-from">
                                                    <spna>Posted from: </spna>
                                                    <h4>{book.college.college_name}</h4>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="category-view">
                                                    <div className="category">
                                                        <spna> Category: </spna>
                                                        <h4>{book.category.category_name}</h4>
                                                    </div>
                                                    <div className="viewsOn-post">
                                                        <spna> Views on post </spna>
                                                        <h4>{book.view_count}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row btn-box">
                                                <div className="col-6 buy-book">
                                                    <a>Buy this Book</a>
                                                </div>
                                                <div className="col-6 exchange-book">
                                                    <a>Get for Exchange</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </>
            )}
        </div>

    )
}

export default BookDetail;