import React, { Component } from "react";
import axios from "axios";

import { Input, Button, Form } from "reactstrap";

class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        bookTitle: "babysitters",
        results: []
      };
    }

    onEnter = e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            this.handleSearch(this.state.bookTitle);
          }
    }

    handleSearch = (title) => {
        axios.get(`http://openlibrary.org/search.json?title=${title}`)
        .then(res => this.setState({
            results: res.data.docs 
        }, console.log(res.data.docs)))
        .catch(err => console.log(err));
    }
    renderResults = e => {
        console.log("render results" , this.state.results)
        const { results } = this.state
        const listBooks = results.map((book) =>
        <li>
            {book}
        </li>
        )
        return listBooks
    }

    render(){
        return(
            <div id="searchComp">
            <h1>This is the Search componenet</h1>
            <Form>
            <p>Enter a book title:</p>
            <Input type="text" name="bookTitle" onKeyDown={this.onEnter}/>
            </Form>
            <Button color="success" onClick={() => this.handleSearch(this.state.bookTitle)}>
                Search
            </Button>
            <ul className="list-group list-group-flush">
            </ul>
            </div>   
        )
    }

}
export default Search;