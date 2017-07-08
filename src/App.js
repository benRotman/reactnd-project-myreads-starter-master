import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBar from './SerachBar'
import BooksLists from './BooksLists'
//import * as BooksApi from './BooksAPI'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

class BooksApp extends React.Component {
  state = {
    Books:[]
  }


  componentDidMount() {
    BooksAPI.getAll().then((Books) => {
      this.setState({Books});
    });
  }

  updateBook(value,book) {
    //this.props.liftValue(value);
    BooksAPI.update(book, value).then(() => {
      BooksAPI.getAll().then((Books) => {
        this.setState({Books});
      });
    })
  }

  render() {
    return (
      <div className="app">

        <Route  path="/search" render={() => (
            <SearchBar/>
          )}/>

        <Route exact path="/" render={({ history }) => (
            <BooksLists liftValue={this.updateBook.bind(this)} books={this.state.Books}/>
          )}/>




      </div>
    )
  }
}

export default BooksApp
