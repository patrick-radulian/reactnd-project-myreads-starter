import React from "react";
import PropTypes from "prop-types";

class BookInstance extends React.Component {
    static PropTypes = {
        book: PropTypes.object.isRequired,
        onMoveBook: PropTypes.func.isRequired
    }

    state = {
        options: [
            {
                label: "Currently Reading",
                value: "currentlyReading"
            },
            {
                label: "Want to Read",
                value: "wantToRead"
            },
            {
                label: "Read",
                value: "read"
            },
            {
                label: "None",
                value: "none"
            }
        ]
    }

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>

                    <div className="book-shelf-changer">
                        <select onChange={(event) => this.props.onMoveBook(this.props.book, event.target.value)}>
                            <option value="none" disabled>Move to...</option>

                            {this.state.options.map((option) => {
                                let selected = this.props.book.shelf === option.value ? true : false;

                                return <option value={option.value} selected={selected}>{option.label}</option>
                            })}
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