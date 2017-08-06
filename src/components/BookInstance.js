import React from "react";
import PropTypes from "prop-types";

class BookInstance extends React.Component {
    static PropTypes = {
        book: PropTypes.object.isRequired,
        onMoveBook: PropTypes.func.isRequired
    }

    state = {
        shelf: ""
    }

    componentDidMount() {
        this.setState({ shelf: this.props.bookShelf });
        console.log(this.props.book);
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>

                    <div className="book-shelf-changer">
                        <select onChange={(event) => this.props.onMoveBook(event.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>

                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">
                    <ul>
                        {this.props.book.authors.map((author) => (
                            <li key={author}>{author}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default BookInstance;