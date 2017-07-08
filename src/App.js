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
      console.log(this.state.Books)
    });
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
            <SearchBar/>
          )}/>

        <Route path="/search" render={({ history }) => (
            <BooksLists books={this.state.Books}/>
          )}/>




      </div>
    )
  }
}

export default BooksApp
