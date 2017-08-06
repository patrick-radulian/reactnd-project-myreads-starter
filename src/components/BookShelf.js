import React from "react";
import BookInstance from "BookInstance";

class BookShelf extends React.Component {
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