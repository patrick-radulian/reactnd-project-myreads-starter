import React from "react";
import BookInstance from "./BookInstance";
import PropTypes from "prop-types";

class BookShelf extends React.Component {
    static PropTypes = {
        bookShelfTitle: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired
    }

    moveBook(newShelf) {
        if (newShelf !== "none" && newShelf !== this.state.shelf) {
            console.log(newShelf);
            console.log(this);
        }
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
                                    onMoveBook={this.moveBook}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;