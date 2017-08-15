import React from "react";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BookInstance from "./BookInstance";

class SearchBooks extends React.Component {
    static PropTypes = {
        onMoveBook: PropTypes.func.isRequired
    }

    state = {
        query: "",
        books: []
    }

    updateQuery(newValue) {
        this.setState({query: newValue});

        if (newValue.length > 0) {
            BooksAPI.search(newValue, 20).then((books) => {
                this.setState({books});
            });
        } else {
            this.setState({books: []});
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
                    {this.state.books.length > 0 && (
                        <ol className="books-grid">
                            {this.state.books.map((book) => (
                                <li key={book.id}>
                                    <BookInstance book={book} onMoveBook={this.props.onMoveBook}/>
                                </li>
                            ))}
                        </ol>
                    )}
                </div>
            </div>
        )
    }
}

export default SearchBooks;