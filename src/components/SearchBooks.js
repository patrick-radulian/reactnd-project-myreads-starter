import React from "react";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BookInstance from "./BookInstance";

class SearchBooks extends React.Component {
    static PropTypes = {
        onMoveBook: PropTypes.func.isRequired,
        shelfBooks: PropTypes.object.isRequired
    }

    state = {
        query: "",
        queryRunning: false,
        books: []
    }

    updateQuery(newValue) {
        this.setState({
            query: newValue,
            queryRunning: true
        });

        if (newValue.length > 0) {
            BooksAPI.search(newValue, 20).then((books) => {
                this.setState({
                    books: books,
                    queryRunning: false
                });
            });
        } else {
            this.setState({
                books: [],
                queryRunning: false
            });
        }
    }

    isOnShelf(searchResultBook) {
        outer_loop:
        for (let shelf in this.props.shelfBooks) {
            for (let shelfBook of this.props.shelfBooks[shelf]) {
                if (shelfBook.id === searchResultBook.id) {
                    return shelfBook.shelf;
                    break outer_loop;
                }
            }
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>

                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>
                    </div>
                </div>

                <div className="search-books-results">
                    {
                        this.state.books.length > 0 ? (
                            <ol className="books-grid">
                                {this.state.books.map((book) => (
                                    <li key={book.id}>
                                        <BookInstance shelf={this.isOnShelf(book)} book={book} onMoveBook={this.props.onMoveBook}/>
                                    </li>
                                ))}
                            </ol>
                        ) : (
                            this.state.query.length > 0 && !this.state.queryRunning && (
                                <div>
                                    No search results.
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}

export default SearchBooks;