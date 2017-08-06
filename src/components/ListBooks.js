import React from "react";
import Bookshelf from "./BookShelf";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ListBooks extends React.Component {
    static PropTypes = {
        books: PropTypes.array.isRequired
    }

    render() {
        let currentlyReading = this.props.books.filter((book) => { return book.shelf === "currentlyReading" });
        let wantToRead = this.props.books.filter((book) => { return book.shelf === "wantToRead" });
        let read = this.props.books.filter((book) => { return book.shelf === "read" });

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">
                    <Bookshelf bookShelfTitle="Currently Reading"/>
                    <Bookshelf bookShelfTitle="Want To Read"/>
                    <Bookshelf bookShelfTitle="Read"/>
                </div>

                <div className="open-search">
                    <Link to="/search" className="open-search">Add a book</Link>
                </div>
          </div>
        )
    }
}

export default ListBooks;