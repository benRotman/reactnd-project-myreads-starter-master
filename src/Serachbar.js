/**
 * Created by benrotman on 08/07/2017.
 */
/**
 * Created by benrotman on 29/06/2017.
 */
//import React from 'react'
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'
import { Link } from 'react-router-dom'

class SearchBar extends Component{


    render() {



        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>

        )
    }

}

export default SearchBar