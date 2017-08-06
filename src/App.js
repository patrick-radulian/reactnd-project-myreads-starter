import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import SearchBooks from "./components/SearchBooks";
import ListBooks from "./components/ListBooks";
import "./App.css";

class BooksAppNew extends React.Component {
    state = {
        books: {
            currentlyReading: [],
            wantToRead: [],
            read: []
        }
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books: {
                currentlyReading: books.filter((book) => { return book.shelf === "currentlyReading" }),
                wantToRead: books.filter((book) => { return book.shelf === "wantToRead" }),
                read: books.filter((book) => { return book.shelf === "read" })
            }});
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