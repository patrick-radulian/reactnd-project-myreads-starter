import React from "react";
import BookInstance from "./BookInstance";
import PropTypes from "prop-types";

class BookShelf extends React.Component {
    static PropTypes = {
        bookShelfTitle: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    }

    render () {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>

                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>

                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;