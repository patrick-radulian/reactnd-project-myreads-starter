import React from "react";
import PropTypes from "prop-types";

class BookInstance extends React.Component {
    static PropTypes = {
        book: PropTypes.object.isRequired,
        onMoveBook: PropTypes.func.isRequired,
        shelf: PropTypes.string
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
        let bgValue = "";

        if (this.props.book.hasOwnProperty("imageLinks")) {
            bgValue = `url(${this.props.book.imageLinks.thumbnail})`;
        } else {
            bgValue = "#FFF";
        }

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{textAlign: "center", width: 128, height: 193, background: bgValue}}>
                        {!this.props.book.hasOwnProperty("imageLinks") && (
                            <p>No cover available</p>
                        )}
                    </div>

                    <div className="book-shelf-changer">
                        <select defaultValue={this.props.book.shelf || "none"} onChange={(event) => this.props.onMoveBook(this.props.book, event.target.value)}>
                            <option value="none" disabled>Move to...</option>

                            {this.state.options.map((option) => {
                                return <option
                                            key={option.value}
                                            value={option.value}
                                            {...option.value === this.props.book.shelf ? {disabled: "disabled"} : {}}>{option.label}</option>
                            })}
                        </select>
                    </div>
                </div>

                <div className="book-title">{this.props.book.title}</div>
                {this.props.book.authors && this.props.book.authors.length > 0 && (
                    <div className="book-authors">
                        <ul>
                            {this.props.book.authors.map((author) => (
                                <li key={author}>{author}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        )
    }
}

export default BookInstance;