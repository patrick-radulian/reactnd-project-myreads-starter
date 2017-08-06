import React from "react";
import BookInstance from "./BookInstance";
import PropTypes from "prop-types";

class BookShelf extends React.Component {
    static PropTypes = {
        bookShelfTitle: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    }

    componentDidUpdate() {
        console.log(this.props.books);
    }

    render () {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ this.props.bookShelfTitle }</h2>

                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li><BookInstance/></li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;