import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import React from "react";
import Home from './components/Home'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import BookDetail from './components/BookDetails';
import BookListing from './components/BookListing';
function App() {
  return (<>
    <div>
      <Routes>

        <Route exact path='/' element={<Home></Home>}></Route>

        <Route exact path='/books' element={<BookListing></BookListing>}></Route>

        <Route exact path='/books/:id' element={<BookDetail></BookDetail>}></Route>


      </Routes>

    </div>

  </>
  );
}

export default App;