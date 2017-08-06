import React from "react";
import PropTypes from "prop-types";

class BookInstance extends React.Component {
    static PropTypes = {
        imageURL: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired,
        bookShelf: PropTypes.string.isRequired
    }

    state = {
        shelf: ""
    }

    componentDidMount() {
        this.setState({ shelf: this.props.bookShelf });
    }

    moveBook(event) {

    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imageURL})` }}></div>

                    <div className="book-shelf-changer">
                        <select onChange={(event) => this.moveBook(event.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>

                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">
                    <ul>
                        {this.props.authors.map((author) => (
                            <li key={author}>{author}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default BookInstance;