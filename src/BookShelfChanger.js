import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'
import { Link } from 'react-router-dom'

class BookShelfChanger extends Component{



    handleUpdate = (e) => {
        this.props.liftValue(e.target.value);
    }

    render() {

        const { book } = this.props;
        return (
            <div className="book-shelf-changer">
                <select onChange = {this.handleUpdate.bind(this)}>
                    <option value="none" disabled>Move to...</option>
                    <option selected={book.shelf === 'currentlyReading'}  value="currentlyReading">Currently Reading</option>
                    <option selected={book.shelf === 'wantToRead'}  value="wantToRead">Want to Read</option>
                    <option selected={book.shelf === 'read'} value="read">Read</option>
                </select>
            </div>
        )
    }

}

export default BookShelfChanger