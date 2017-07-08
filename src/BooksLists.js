import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import BookShelf from './BookShelf';
import { Link } from 'react-router-dom'

class BooksLists extends Component{


    static propTypes = {
        books:PropTypes.array.isRequired,
    };

    state= {
        books:[]
    }


    render() {


        const { books } = this.props;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                       <BookShelf shelf="Currently Reading" books={books.filter((b) => b.shelf === 'currentlyReading')}/>
                       <BookShelf shelf="Want To Read" books={books.filter((b) => b.shelf === 'wantToRead')}/>
                       <BookShelf shelf="Currently Reading" books={books.filter((b) => b.shelf === 'read')}/>
                    </div>
                </div>
                <div className="open-search">

                    <Link to="/">Add a book</Link>
                </div>
            </div>

        )
    }

}

export default BooksLists