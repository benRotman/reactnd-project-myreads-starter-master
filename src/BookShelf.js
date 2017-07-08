import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book';
import escapeRegExp from 'escape-string-regexp'
import { Link } from 'react-router-dom'

class BookShelf extends Component{
    state = {
        books: []
    }


    componentWillReceiveProps(nextProps) {

        this.setState({
            books: nextProps.books
        });
    }

    render() {

        const { books } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelf}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <Book book={book} key={book.id}/>

                        ))}
                    </ol>
                </div>
            </div>

        )
    }

}

export default BookShelf