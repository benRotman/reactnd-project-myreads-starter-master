import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import BookShelfChanger from './BookShelfChanger';
import { Link } from 'react-router-dom'

class Book extends Component{
    state = {
        book:{}
    }

    componentWillReceiveProps(nextProps) {

        this.setState({
            book: nextProps.book
        });
    }

    render() {

        const { book } = this.props;

        return (
            <li key={book.id}>

                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <BookShelfChanger/>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors[0]}</div>
                </div>
            </li>

        )
    }

}

export default Book