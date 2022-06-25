import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function BooksAll(props) {
    // console.log(props, "props");
    return (
        <div>
            <div className="listing-details row">
                <div className="listing-box col-8">
                    <div className="img-box">
                        <img className="book-images" src={props.book.photo}></img>
                    </div>
                    <div className="books-details-box">
                        <a>
                            <Link to={`/books/${props.book.id}`}><h3 className="book-name">{props.book.name}</h3></Link>
                        </a>
                        <p className="author-name">{props.book.author}</p>
                        <p className="city-name">{props.book.city.city_name}</p>
                        <p className="posted-by">Posted by :<a><img className="default-img" src="http://images.studentdesk.in/img/icons/large/defaultuser.png"></img>Jill thakkar</a></p>
                        <div><a className="buyBook-btn">Buy Book</a><a className="exchangeBook-btn">Exchange Book</a></div>
                    </div>
                    <div className="price-box col-4">
                        <h4>Price:{props.book.mrp}<i className="fa-solid fa-indian-rupee-sign"></i>
                        </h4>
                        <p style={{ marginTop: '30px' }}>Posted on : 1, Dec</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BooksAll;
