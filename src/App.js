import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import SearchBooks from "./components/SearchBooks";
import ListBooks from "./components/ListBooks";
import "./App.css";

class BooksAppNew extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books: books });
        });
    }

    moveBook(book, newShelf) {
        if (newShelf !== "none" && newShelf !== book.shelf) {
            BooksAPI.update(book, newShelf).then((response) => {
                console.log(response);
            });
        }
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <ListBooks books={ this.state.books } onMoveBook={this.moveBook}/>
                )}/>
                <Route exact path="/search" render={() => (
                    <SearchBooks/>
                )}/>
            </div>
        )
    }
}

export default BooksAppNew;