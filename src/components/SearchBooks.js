import React from "react";
import * as BooksAPI from "../BooksAPI";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import BookInstance from "./BookInstance";
import infoIcon from "../icons/ic_info_black_24px.svg";

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

    constructor() {
        super();

        this.queryTimeout = null;

        this.updateQuery = (newValue) => {
            this.setState({
                query: newValue,
                queryRunning: true
            });

            if (newValue.length > 0) {
                window.clearTimeout(this.queryTimeout);

                this.queryTimeout = window.setTimeout(() => {
                    BooksAPI.search(newValue, 20).then((books) => {
                        this.setState({
                            books: books,
                            queryRunning: false
                        });
                    });
                }, 350);
            } else {
                this.setState({
                    books: [],
                    queryRunning: false
                });
            }
        }
    }

    isOnShelf(searchResultBook) {
        for (let shelf in this.props.shelfBooks) {
            if (this.props.shelfBooks.hasOwnProperty(shelf)) {
                for (let shelfBook of this.props.shelfBooks[shelf]) {
                    if (shelfBook.id === searchResultBook.id) {
                        return shelfBook;
                    }
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
                                {this.state.books.map((foundBook) => (
                                    <li key={foundBook.id}>
                                        <BookInstance {...{book: this.isOnShelf(foundBook) || foundBook}} onMoveBook={this.props.onMoveBook}/>

                                        {this.isOnShelf(foundBook) && (
                                            <div className="book-owned">
                                                <img src={infoIcon} alt=""/>
                                                <span>This book is on your <em>"{this.isOnShelf(foundBook).shelf}"</em> shelf.</span>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        ) : (
                            this.state.query.length > 0 && !this.state.queryRunning && (
                                <div>No search results.</div>
                            )
                        )
                    }
                </div>
            </div>
        )
    }
}

export default SearchBooks;