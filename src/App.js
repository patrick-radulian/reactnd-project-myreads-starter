import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import { SearchBooks } from "./components/SearchBooks";
import { ListBooks } from "./components/ListBooks";
import "./App.css";

class BooksAppNew extends React.Component {
    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => {
                    <ListBooks/>
                }}/>
                <Route exact path="/search" render={() => {
                    <SearchBooks/>
                }}/>
            </div>
        )
    }
}

export default BooksAppNew;