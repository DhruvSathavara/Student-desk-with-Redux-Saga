import { Link } from "react-router-dom";
import React from "react";


function Banner() {
    return (
        <>  <div className="mainbg">
            <div className=" container">
                <h3 className="text-center text-white txt">I Want to Buy/Sell/Exchange used Book in my</h3>
                <div className="row button-box ">

                    <div className="offset-5 col-1">
                        <button id="city-btn" className="btn btn-outline-light"><i className="fa-solid fa-building"></i>   CITY</button>
                    </div>
                    <div className="col-1 span-5">
                        <button id="institute-btn" className="btn btn-outline-light"><i className="fa-solid fa-building-columns"></i>    INSTITUTE</button>
                    </div>
                    <div className="info">
                        <h5 className="text-center text-white" >Books in popular cities: Delhi, Pune, Bangalore, Ahmedabad</h5>
                        <span><h4 className="text-center text-white">- OR -</h4></span>
                    </div>


                    {/*--------------- "SEARCH BOX HERE"------------ */}

                    <div className="row">
                        <div className="offset-3 searchinput">
                            <input className="search-box"
                                type="text"
                                placeholder="Search by Author/Book name">
                            </input><i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                    
                    {/* --------------SEARCH ITEMS-------------------- */}

                    <div className='row browesitems'>
                        <div className="SearchItems col-6 offset-3">
                            <ul style={{ display: 'flex', color: 'white' }}>
                                <li> <Link to='/books'>Books </Link>|  </li>
                                <li>Textbook/Study Notes | </li>
                                <li>Magazines | </li>
                                <li>Book set</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div className="container info-section ">
                <p>StudentDesk is bridging communication gap and connecting book readers of various institutes. Reuse, and Circulation of books will not only make accessing book economical but will also help in building the sustainable environment.</p>

            </div>


        </>
    )
}

export default Banner;