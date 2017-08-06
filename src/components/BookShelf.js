import React from "react";
import BookInstance from "./BookInstance";
import PropTypes from "prop-types";

class BookShelf extends React.Component {
    static PropTypes = {
        bookShelfTitle: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onMoveBook: PropTypes.func.isRequired
    }

    render () {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ this.props.bookShelfTitle }</h2>

                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li key={book.id}>
                                <BookInstance
                                    title={ book.title }
                                    authors={ book.authors }
                                    imageURL={ book.imageLinks.smallThumbnail }
                                    bookShelf={book.shelf}
                                    onMoveBook={this.props.onMoveBook}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;